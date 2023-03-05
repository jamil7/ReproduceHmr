import { Union } from "./fable_modules/fable-library.4.0.0-theta-018/Types.js";
import { union_type } from "./fable_modules/fable-library.4.0.0-theta-018/Reflection.js";
import { append, singleton, empty, tail, head, isEmpty } from "./fable_modules/fable-library.4.0.0-theta-018/List.js";
import { RouterModule_trySeparateLast, RouterModule_encodeQueryString, RouterModule_nav } from "./fable_modules/Feliz.Router.4.0.0/Router.fs.js";
import { map, defaultArgWith } from "./fable_modules/fable-library.4.0.0-theta-018/Option.js";
import { Cmd_ofEffect } from "./fable_modules/Fable.Elmish.4.0.0/cmd.fs.js";

export class Page extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Home", "Page1"];
    }
}

export function Page$reflection() {
    return union_type("App.Page", [], Page, () => [[], []]);
}

export const PageModule_defaultRoute = new Page(0, []);

export function PageModule_parseFromUrlSegments(_arg) {
    let matchResult;
    if (!isEmpty(_arg)) {
        if (head(_arg) === "page1") {
            if (isEmpty(tail(_arg))) {
                matchResult = 0;
            }
            else {
                matchResult = 1;
            }
        }
        else {
            matchResult = 1;
        }
    }
    else {
        matchResult = 1;
    }
    switch (matchResult) {
        case 0: {
            return new Page(1, []);
        }
        case 1: {
            return new Page(0, []);
        }
    }
}

export function PageModule_noQueryString(segments) {
    return [segments, empty()];
}

export function PageModule_toUrlSegments(_arg) {
    if (_arg.tag === 1) {
        return PageModule_noQueryString(singleton("page1"));
    }
    else {
        return PageModule_noQueryString(empty());
    }
}

export function Router_goToUrl(e) {
    e.preventDefault();
    const href = e.currentTarget.attributes.href.value;
    RouterModule_nav(singleton(href), 1, 2);
}

export function Router_navigateToPage(page) {
    const tupledArg = PageModule_toUrlSegments(page);
    const queryString = tupledArg[1];
    defaultArgWith(map((tupledArg_1) => {
        const r = tupledArg_1[0];
        const l = tupledArg_1[1];
        RouterModule_nav(append(r, singleton(l + RouterModule_encodeQueryString(queryString))), 1, 2);
    }, RouterModule_trySeparateLast(tupledArg[0])), () => {
        RouterModule_nav(singleton(RouterModule_encodeQueryString(queryString)), 1, 2);
    });
}

export function Cmd_navigateToPage(page) {
    const tupledArg = PageModule_toUrlSegments(page);
    return Cmd_ofEffect((_arg_1) => {
        const queryString_1 = tupledArg[1];
        defaultArgWith(map((tupledArg_1) => {
            const r = tupledArg_1[0];
            const l = tupledArg_1[1];
            RouterModule_nav(append(r, singleton(l + RouterModule_encodeQueryString(queryString_1))), 1, 2);
        }, RouterModule_trySeparateLast(tupledArg[0])), () => {
            RouterModule_nav(singleton(RouterModule_encodeQueryString(queryString_1)), 1, 2);
        });
    });
}

