import { FSharpRef, Union, Record } from "./fable_modules/fable-library.4.0.0-theta-018/Types.js";
import { getCaseFields, getCaseName as getCaseName_1, isUnion, string_type, union_type, record_type, int32_type } from "./fable_modules/fable-library.4.0.0-theta-018/Reflection.js";
import { singleton } from "./fable_modules/fable-library.4.0.0-theta-018/AsyncBuilder.js";
import { Cmd_map, Cmd_none } from "./fable_modules/Fable.Elmish.4.0.0/cmd.fs.js";
import { createElement } from "react";
import * as react from "react";
import { join } from "./fable_modules/fable-library.4.0.0-theta-018/String.js";
import { Interop_reactApi } from "./fable_modules/Feliz.2.4.1/Interop.fs.js";
import { empty as empty_1, cons, singleton as singleton_1, ofArray } from "./fable_modules/fable-library.4.0.0-theta-018/List.js";
import { PageModule_parseFromUrlSegments, Page$reflection, Page, Cmd_navigateToPage } from "./Router.js";
import { RouterModule_router, RouterModule_urlSegments } from "./fable_modules/Feliz.Router.4.0.0/Router.fs.js";
import { Program_Internal_withReactBatchedUsing } from "./fable_modules/Fable.Elmish.React.4.0.0/react.fs.js";
import { lazyView2With } from "./fable_modules/Fable.Elmish.HMR.7.0.0/common.fs.js";
import { uncurry } from "./fable_modules/fable-library.4.0.0-theta-018/Util.js";
import { ProgramModule_mkProgram, ProgramModule_withConsoleTrace } from "./fable_modules/Fable.Elmish.4.0.0/program.fs.js";
import { Program_withDebuggerUsing, Debugger_showWarning, Debugger_showError } from "./fable_modules/Fable.Elmish.Debugger.4.0.0/debugger.fs.js";
import { newGuid } from "./fable_modules/fable-library.4.0.0-theta-018/Guid.js";
import { add } from "./fable_modules/fable-library.4.0.0-theta-018/Map.js";
import { Auto_generateBoxedEncoder_437914C6, uint64, int64, decimal } from "./fable_modules/Thoth.Json.6.0.0/Encode.fs.js";
import { Auto_generateBoxedDecoder_Z6670B51, uint64 as uint64_1, int64 as int64_1, decimal as decimal_1 } from "./fable_modules/Thoth.Json.6.0.0/Decode.fs.js";
import { empty } from "./fable_modules/Thoth.Json.6.0.0/Extra.fs.js";
import { ExtraCoders } from "./fable_modules/Thoth.Json.6.0.0/Types.fs.js";
import { fromValue } from "./fable_modules/Thoth.Json.6.0.0/Decode.fs.js";
import { Debugger_ConnectionOptions } from "./fable_modules/Fable.Elmish.Debugger.4.0.0/debugger.fs.js";
import { Options$1 } from "./fable_modules/Fable.Elmish.Debugger.4.0.0/Fable.Import.RemoteDev.fs.js";
import { connectViaExtension } from "remotedev";
import { defaultOf } from "./fable_modules/fable-library.4.0.0-theta-018/Util.js";
import { current as current_2 } from "./fable_modules/Fable.Elmish.HMR.7.0.0/Bundler.fs.js";
import { Internal_saveState, Internal_tryRestoreState } from "./fable_modules/Fable.Elmish.HMR.7.0.0/hmr.fs.js";
import { Cmd_map as Cmd_map_1, Cmd_none as Cmd_none_1 } from "./fable_modules/Fable.Elmish.4.0.0/cmd.fs.js";
import { Msg$1 } from "./fable_modules/Fable.Elmish.HMR.7.0.0/hmr.fs.js";
import { Sub_map, Sub_batch } from "./fable_modules/Fable.Elmish.4.0.0/sub.fs.js";
import { ProgramModule_map, ProgramModule_runWith } from "./fable_modules/Fable.Elmish.4.0.0/program.fs.js";
import "../index.css";

export class Page1_Model extends Record {
    constructor(Counter) {
        super();
        this.Counter = (Counter | 0);
    }
}

export function Page1_Model$reflection() {
    return record_type("App.Page1.Model", [], Page1_Model, () => [["Counter", int32_type]]);
}

export function Page1_Model_get_Init() {
    return new Page1_Model(0);
}

export class Page1_Msg extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Increase", "Decrease"];
    }
}

export function Page1_Msg$reflection() {
    return union_type("App.Page1.Msg", [], Page1_Msg, () => [[], []]);
}

export function Page1_asyncGet() {
    return singleton.Delay(() => singleton.Return("hi there"));
}

export function Page1_init() {
    return [Page1_Model_get_Init(), Cmd_none()];
}

export function Page1_update(msg, model) {
    if (msg.tag === 1) {
        return [new Page1_Model(model.Counter - 1), Cmd_none()];
    }
    else {
        return [new Page1_Model(model.Counter + 1), Cmd_none()];
    }
}

export function Page1_view(model, dispatch) {
    const children = ofArray([createElement("button", {
        className: join(" ", ["bg-orange-500"]),
        onClick: (_e) => {
            dispatch(new Page1_Msg(0, []));
        },
        children: Interop_reactApi.Children.toArray(["++"]),
    }), createElement("br", {}), model.Counter, createElement("br", {}), createElement("button", {
        onClick: (_e_1) => {
            dispatch(new Page1_Msg(1, []));
        },
        children: Interop_reactApi.Children.toArray(["-"]),
    })]);
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    });
}

export class Home_Model extends Record {
    constructor(Foo) {
        super();
        this.Foo = Foo;
    }
}

export function Home_Model$reflection() {
    return record_type("App.Home.Model", [], Home_Model, () => [["Foo", string_type]]);
}

export function Home_Model_get_Init() {
    return new Home_Model("");
}

export class Home_Msg extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["ButtonClicked"];
    }
}

export function Home_Msg$reflection() {
    return union_type("App.Home.Msg", [], Home_Msg, () => [[]]);
}

export function Home_init() {
    return [Home_Model_get_Init(), Cmd_none()];
}

export function Home_update(msg, model) {
    return [model, Cmd_navigateToPage(new Page(1, []))];
}

export function Home_view(_model, dispatch) {
    const children = singleton_1(createElement("button", {
        onClick: (_arg) => {
            dispatch(new Home_Msg(0, []));
        },
        className: join(" ", ["text-lg"]),
        children: Interop_reactApi.Children.toArray(["navigate to page"]),
    }));
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    });
}

export class App_SubModel extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Home", "Page1"];
    }
}

export function App_SubModel$reflection() {
    return union_type("App.App.SubModel", [], App_SubModel, () => [[["homeModel", Home_Model$reflection()]], [["page1Model", Page1_Model$reflection()]]]);
}

export class App_Model extends Record {
    constructor(SubModel) {
        super();
        this.SubModel = SubModel;
    }
}

export function App_Model$reflection() {
    return record_type("App.App.Model", [], App_Model, () => [["SubModel", App_SubModel$reflection()]]);
}

export function App_Model_get_Init() {
    return new App_Model(new App_SubModel(0, [Home_Model_get_Init()]));
}

export class App_Msg extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["UrlChanged", "HomeMsg", "Page1Msg"];
    }
}

export function App_Msg$reflection() {
    return union_type("App.App.Msg", [], App_Msg, () => [[["page", Page$reflection()]], [["homeMsg", Home_Msg$reflection()]], [["page1Msg", Page1_Msg$reflection()]]]);
}

export function App_updateUrl(model, nextPage) {
    const show = (subModel) => (new App_Model(subModel));
    if (nextPage.tag === 1) {
        const patternInput_1 = Page1_init();
        const customerModel = patternInput_1[0];
        const customerCmd = patternInput_1[1];
        return [show(new App_SubModel(1, [customerModel])), Cmd_map((arg_3) => (new App_Msg(2, [arg_3])), customerCmd)];
    }
    else {
        const patternInput = Home_init();
        const homeModel = patternInput[0];
        const homeCmd = patternInput[1];
        return [show(new App_SubModel(0, [homeModel])), Cmd_map((arg_1) => (new App_Msg(1, [arg_1])), homeCmd)];
    }
}

export function App_init() {
    let fullPath;
    const nextPage = PageModule_parseFromUrlSegments((fullPath = (window.location.pathname + window.location.search), RouterModule_urlSegments(fullPath, 2)));
    return App_updateUrl(App_Model_get_Init(), nextPage);
}

export function App_update(msg, model) {
    const matchValue = model.SubModel;
    if (msg.tag === 1) {
        if (matchValue.tag === 0) {
            const homeModel = matchValue.fields[0];
            const homeMsg = msg.fields[0];
            const patternInput = Home_update(homeMsg, homeModel);
            const homeModel_1 = patternInput[0];
            const homeCmd = patternInput[1];
            return [new App_Model(new App_SubModel(0, [homeModel_1])), Cmd_map((arg) => (new App_Msg(1, [arg])), homeCmd)];
        }
        else {
            return [model, Cmd_none()];
        }
    }
    else if (msg.tag === 2) {
        if (matchValue.tag === 1) {
            const page1Model = matchValue.fields[0];
            const page1Msg = msg.fields[0];
            const patternInput_1 = Page1_update(page1Msg, page1Model);
            const page1Model_1 = patternInput_1[0];
            const page1Cmd = patternInput_1[1];
            return [new App_Model(new App_SubModel(1, [page1Model_1])), Cmd_map((arg_1) => (new App_Msg(2, [arg_1])), page1Cmd)];
        }
        else {
            return [model, Cmd_none()];
        }
    }
    else {
        const nextPage = msg.fields[0];
        return App_updateUrl(model, nextPage);
    }
}

export function App_view(model, dispatch) {
    let currentPage;
    const matchValue = model.SubModel;
    if (matchValue.tag === 1) {
        const page1Model = matchValue.fields[0];
        currentPage = Page1_view(page1Model, (arg_3) => {
            dispatch(new App_Msg(2, [arg_3]));
        });
    }
    else {
        const homeModel = matchValue.fields[0];
        currentPage = Home_view(homeModel, (arg_1) => {
            dispatch(new App_Msg(1, [arg_1]));
        });
    }
    return RouterModule_router({
        hashMode: 2,
        onUrlChanged: (arg_6) => {
            dispatch(new App_Msg(0, [PageModule_parseFromUrlSegments(arg_6)]));
        },
        application: react.createElement(react.Fragment, {}, currentPage),
    });
}


(function () {
    const program_5 = Program_Internal_withReactBatchedUsing((equal, view, state, dispatch_1) => lazyView2With(uncurry(2, equal), uncurry(2, view), state, dispatch_1), "app", (() => {
        let copyOfStruct, copyOfStruct_1, copyOfStruct_2, deflate, inflate, port, address, inputRecord_1, port_1, address_1, inputRecord_2;
        const program_2 = ProgramModule_withConsoleTrace(ProgramModule_mkProgram(App_init, App_update, App_view));
        try {
            let patternInput;
            try {
                let coders;
                let extra_2_1;
                const extra_1_1 = new ExtraCoders((copyOfStruct = newGuid(), copyOfStruct), add("System.Decimal", [decimal, (path) => ((value_1) => decimal_1(path, value_1))], empty.Coders));
                extra_2_1 = (new ExtraCoders((copyOfStruct_1 = newGuid(), copyOfStruct_1), add("System.Int64", [int64, int64_1], extra_1_1.Coders)));
                coders = (new ExtraCoders((copyOfStruct_2 = newGuid(), copyOfStruct_2), add("System.UInt64", [uint64, uint64_1], extra_2_1.Coders)));
                const encoder_3 = Auto_generateBoxedEncoder_437914C6(App_Model$reflection(), void 0, coders, void 0);
                const decoder_3 = Auto_generateBoxedDecoder_Z6670B51(App_Model$reflection(), void 0, coders);
                patternInput = ((deflate = ((x) => {
                    try {
                        return encoder_3(x);
                    }
                    catch (er) {
                        Debugger_showWarning(singleton_1(er.message));
                        return x;
                    }
                }), (inflate = ((x_1) => {
                    const matchValue = fromValue("$", uncurry(2, decoder_3), x_1);
                    if (matchValue.tag === 1) {
                        const er_1 = matchValue.fields[0];
                        throw new Error(er_1);
                    }
                    else {
                        const x_2 = matchValue.fields[0];
                        return x_2;
                    }
                }), [deflate, inflate])));
            }
            catch (er_2) {
                Debugger_showWarning(singleton_1(er_2.message));
                patternInput = [(value_7) => value_7, (_arg) => {
                    throw new Error("Cannot inflate model");
                }];
            }
            const inflater = patternInput[1];
            const deflater = patternInput[0];
            let connection;
            const opt = new Debugger_ConnectionOptions(0, []);
            const makeMsgObj = (tupledArg) => {
                const case$ = tupledArg[0];
                const fields = tupledArg[1];
                return {
                    type: case$,
                    msg: fields,
                };
            };
            const getCase = (x_3) => {
                if (isUnion(x_3)) {
                    const getCaseName = (acc_mut, x_1_1_mut) => {
                        getCaseName:
                        while (true) {
                            const acc = acc_mut, x_1_1 = x_1_1_mut;
                            const acc_1 = cons(getCaseName_1(x_1_1), acc);
                            const fields_1 = getCaseFields(x_1_1);
                            if ((fields_1.length === 1) && isUnion(fields_1[0])) {
                                acc_mut = acc_1;
                                x_1_1_mut = fields_1[0];
                                continue getCaseName;
                            }
                            else {
                                return makeMsgObj([join("/", acc_1), fields_1]);
                            }
                            break;
                        }
                    };
                    return getCaseName(empty_1(), x_3);
                }
                else {
                    return makeMsgObj(["NOT-AN-F#-UNION", x_3]);
                }
            };
            const fallback = new Options$1(true, 443, "remotedev.io", true, getCase);
            connection = connectViaExtension((opt.tag === 1) ? ((port = (opt.fields[1] | 0), (address = opt.fields[0], (inputRecord_1 = fallback, new Options$1(inputRecord_1.remote, port, address, false, inputRecord_1.getActionType))))) : ((opt.tag === 2) ? ((port_1 = (opt.fields[1] | 0), (address_1 = opt.fields[0], (inputRecord_2 = fallback, new Options$1(inputRecord_2.remote, port_1, address_1, inputRecord_2.secure, inputRecord_2.getActionType))))) : (new Options$1(false, 8000, "localhost", false, fallback.getActionType))));
            return Program_withDebuggerUsing(deflater, inflater, connection, program_2);
        }
        catch (ex) {
            Debugger_showError(ofArray(["Unable to connect to the monitor, continuing w/o debugger", ex.message]));
            return program_2;
        }
    })());
    const hmrState = new FSharpRef(defaultOf());
    if (current_2 == null) {
    }
    else {
        const current = current_2;
        window.Elmish_HMR_Count = ((window.Elmish_HMR_Count == null) ? 0 : (window.Elmish_HMR_Count + 1));
        let hmrDataObject;
        switch (current.tag) {
            case 1: {
                ((import.meta.webpackHot /* If error see https://github.com/elmish/hmr/issues/35 */)).accept();
                hmrDataObject = ((import.meta.webpackHot /* If error see https://github.com/elmish/hmr/issues/35 */)).data;
                break;
            }
            case 2: {
                (module.hot).accept();
                hmrDataObject = (module.hot).data;
                break;
            }
            default: {
                import.meta.hot.accept();
                hmrDataObject = (import.meta.hot.data);
            }
        }
        Internal_tryRestoreState(hmrState, hmrDataObject);
    }
    const mapUpdate = (userUpdate, msg_1, model_2) => {
        let patternInput_1;
        if (msg_1.tag === 1) {
            patternInput_1 = [model_2, Cmd_none_1()];
        }
        else {
            const userMsg = msg_1.fields[0];
            patternInput_1 = userUpdate(userMsg)(model_2);
        }
        const newModel = patternInput_1[0];
        const cmd = patternInput_1[1];
        hmrState.contents = newModel;
        return [newModel, Cmd_map_1((arg_1_1) => (new Msg$1(0, [arg_1_1])), cmd)];
    };
    const createModel = (tupledArg_1) => {
        const model_1_1 = tupledArg_1[0];
        const cmd_1 = tupledArg_1[1];
        return [model_1_1, cmd_1];
    };
    const mapInit = (userInit, args) => {
        if (hmrState.contents == null) {
            const patternInput_1_1 = userInit(args);
            const userModel = patternInput_1_1[0];
            const userCmd = patternInput_1_1[1];
            return [userModel, Cmd_map_1((arg_2) => (new Msg$1(0, [arg_2])), userCmd)];
        }
        else {
            return [hmrState.contents, Cmd_none_1()];
        }
    };
    const mapSetState = (userSetState, userModel_1, dispatch_2) => userSetState(userModel_1)((arg_4) => dispatch_2(new Msg$1(0, [arg_4])));
    let hmrSubscription;
    const handler = (dispatch_1_1) => {
        if (current_2 == null) {
        }
        else {
            const current_1 = current_2;
            switch (current_1.tag) {
                case 1: {
                    ((import.meta.webpackHot /* If error see https://github.com/elmish/hmr/issues/35 */)).dispose((data_1) => {
                        Internal_saveState(data_1, hmrState.contents);
                        dispatch_1_1(new Msg$1(1, []));
                    });
                    break;
                }
                case 2: {
                    (module.hot).dispose((data_2) => {
                        Internal_saveState(data_2, hmrState.contents);
                        dispatch_1_1(new Msg$1(1, []));
                    });
                    break;
                }
                default: {
                    import.meta.hot.dispose((data) => {
                        Internal_saveState(data, hmrState.contents);
                        dispatch_1_1(new Msg$1(1, []));
                    });
                }
            }
        }
        return {
            Dispose() {
            },
        };
    };
    hmrSubscription = singleton_1([singleton_1("Hmr"), handler]);
    const mapSubscribe = (subscribe, model_2_1) => Sub_batch(ofArray([Sub_map("HmrUser", (arg_4_1) => (new Msg$1(0, [arg_4_1])), subscribe(model_2_1)), hmrSubscription]));
    const mapView = (userView, model_3, dispatch_2_1) => userView(model_3)((arg_6) => dispatch_2_1(new Msg$1(0, [arg_6])));
    const mapTermination = (tupledArg_1_1) => {
        const predicate = tupledArg_1_1[0];
        const terminate = tupledArg_1_1[1];
        const mapPredicate = (_arg_1) => {
            if (_arg_1.tag === 1) {
                return true;
            }
            else {
                const msg_1_1 = _arg_1.fields[0];
                return predicate(msg_1_1);
            }
        };
        return [mapPredicate, terminate];
    };
    ProgramModule_runWith(void 0, ProgramModule_map(mapInit, mapUpdate, mapView, mapSetState, mapSubscribe, mapTermination, program_5));
})();

