namespace App

open Fable.Core
open Feliz
open Feliz.Router
open Elmish
open Elmish.React

module Page1 =
    type Model =
        {
            Counter: int
        }

        static member Init = { Counter = 0 }

    type Msg =
        | Increase
        | Decrease

    let asyncGet () = async { return "hi there" }

    let init () = Model.Init, Cmd.none

    let update msg model =
        match msg with
        | Increase ->
            { model with
                Counter = model.Counter + 1
            },
            Cmd.none
        | Decrease ->
            { model with
                Counter = model.Counter - 1
            },
            Cmd.none

    let view model dispatch =
        Html.div
            [
                Html.button
                    [
                        prop.classes [ "bg-orange-500" ]
                        prop.onClick (fun _e -> dispatch Increase)
                        prop.children [ Html.text "++" ]
                    ]
                Html.br []
                Html.text model.Counter
                Html.br []
                Html.button [ prop.onClick (fun _e -> dispatch Decrease); prop.children [ Html.text "-" ] ]
            ]

module Home =
    type Model =
        {
            Foo: string
        }

        static member Init = { Foo = "" }

    type Msg = ButtonClicked

    let init () = Model.Init, Cmd.none

    let update msg (model: Model) =
        match msg with
        | ButtonClicked -> model, Cmd.navigateToPage Page.Page1

    let view _model dispatch =
        Html.div
            [
                Html.button
                    [
                        prop.onClick (fun _ -> dispatch ButtonClicked)
                        prop.classes [ "text-lg" ]
                        prop.children [ Html.text "navigate to page" ]
                    ]
            ]

module App =

    [<RequireQualifiedAccess>]
    type SubModel =
        | Home of homeModel: Home.Model
        | Page1 of page1Model: Page1.Model

    type Model =
        {
            SubModel: SubModel
        }

        static member Init =
            {
                SubModel = SubModel.Home Home.Model.Init
            }

    type Msg =
        | UrlChanged of page: Page
        | HomeMsg of homeMsg: Home.Msg
        | Page1Msg of page1Msg: Page1.Msg


    let updateUrl model nextPage =
        let show subModel = { model with SubModel = subModel }

        match nextPage with
        | Page.Home ->
            let homeModel, homeCmd = Home.init ()
            homeModel |> SubModel.Home |> show, Cmd.map Msg.HomeMsg homeCmd
        | Page.Page1 ->
            let customerModel, customerCmd = Page1.init ()
            customerModel |> SubModel.Page1 |> show, Cmd.map Msg.Page1Msg customerCmd

    let init () =
        Router.currentPath () |> Page.parseFromUrlSegments |> updateUrl Model.Init

    let update msg model =
        match msg, model.SubModel with
        | UrlChanged nextPage, _ -> updateUrl model nextPage
        | HomeMsg homeMsg, SubModel.Home homeModel ->
            let homeModel, homeCmd = Home.update homeMsg homeModel

            { model with
                SubModel = SubModel.Home homeModel
            },
            Cmd.map Msg.HomeMsg homeCmd
        | HomeMsg _, _ -> model, Cmd.none
        | Page1Msg page1Msg, SubModel.Page1 page1Model ->
            let page1Model, page1Cmd = Page1.update page1Msg page1Model

            { model with
                SubModel = SubModel.Page1 page1Model
            },
            Cmd.map Msg.Page1Msg page1Cmd
        | Page1Msg _, _ -> model, Cmd.none

    let view model dispatch =
        let currentPage =
            match model.SubModel with
            | SubModel.Home homeModel -> Home.view homeModel (Msg.HomeMsg >> dispatch)
            | SubModel.Page1 page1Model -> Page1.view page1Model (Msg.Page1Msg >> dispatch)

        React.router
            [
                router.pathMode
                router.onUrlChanged (Page.parseFromUrlSegments >> Msg.UrlChanged >> dispatch)
                router.children [ currentPage ]
            ]

module Main =

#if DEBUG
    open Elmish.Debug
    open Elmish.HMR
#endif

    JsInterop.importSideEffects "../index.css"

    Program.mkProgram App.init App.update App.view
#if DEBUG
    |> Program.withConsoleTrace
    |> Program.withDebugger
#endif
    |> Program.withReactBatched "app"
    |> Program.run
