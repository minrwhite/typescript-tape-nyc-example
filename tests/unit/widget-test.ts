/**
 * Created by benjamin on 08/11/16.
 */

import * as tape from "tape"
import {Widget} from "../../src/widget"

tape("Widget", function (t: tape.Test) {
    t.plan(3)
    let widget = new Widget(5)
    t.pass("should take a multiplicand in its constructor")
    let result: number = widget.multiply(4)
    t.pass("should take a multiplier in the multiply() method")
    t.equal(result, 20, "and should multiply the multipler and multiplicand together")
})
