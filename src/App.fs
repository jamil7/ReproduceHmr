namespace App

open Feliz
open Elmish
open Elmish.React

module App =
    type Model =
        {
            Counter: int
        }

        static member Init = { Counter = 0 }

    type Msg =
        | Increase
        | Decrease

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
                Html.button [ prop.onClick (fun _e -> dispatch Increase); prop.children [ Html.text "++" ] ]
                Html.br []
                Html.text model.Counter
                Html.br []
                Html.button [ prop.onClick (fun _e -> dispatch Decrease); prop.children [ Html.text "-" ] ]
            ]


module Main =

#if DEBUG
    open Elmish.Debug
    open Elmish.HMR
#endif


    Program.mkProgram App.init App.update App.view
#if DEBUG
    |> Program.withConsoleTrace
    |> Program.withDebugger
#endif
    |> Program.withReactBatched "app"
    |> Program.run
