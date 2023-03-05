namespace App

open Browser.Types
open Feliz.Router
open Fable.Core.JsInterop

[<RequireQualifiedAccess>]
type Page =
    | Home
    | Page1

[<RequireQualifiedAccess>]
module Page =
    let defaultRoute = Page.Home

    let parseFromUrlSegments =
        function
        | [ "page1" ] -> Page.Page1
        | _ -> Page.Home

    let noQueryString segments : string list * (string * string) list = segments, []

    let toUrlSegments =
        function
        | Page.Home -> [] |> noQueryString
        | Page.Page1 -> [ "page1" ] |> noQueryString

[<RequireQualifiedAccess>]
module Router =
    let goToUrl (e: MouseEvent) =
        e.preventDefault ()
        let href: string = !!e.currentTarget?attributes?href?value
        Router.navigatePath href

    let navigateToPage (page: Page) =
        page |> Page.toUrlSegments |> Router.navigatePath

[<RequireQualifiedAccess>]
module Cmd =
    let navigateToPage (page: Page) =
        page |> Page.toUrlSegments |> Cmd.navigatePath
