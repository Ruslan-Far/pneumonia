import {A_is_old, A_is_young_middle} from "./mf/input/A";
import {B_is_high, B_is_low, B_is_normal} from "./mf/input/B";
import {C_is_high, C_is_low, C_is_normal} from "./mf/input/C";
import {D_is_absent, D_is_traced} from "./mf/input/D";
import {E_is_normal, E_is_not_often, E_is_often} from "./mf/input/E";
import {S_is_bad, S_is_good, S_is_other, S_is_very_bad} from "./mf/output/S";

export let numberRules = 108;
export let numberSubconditionsInRule = 5;

class Rule
{
    #MFA;
    #MFB;
    #MFC;
    #MFD;
    #MFE;
    #MFS;

    constructor(MFA, MFB, MFC, MFD, MFE, MFS)
    {
        this.#MFA = MFA;
        this.#MFB = MFB;
        this.#MFC = MFC;
        this.#MFD = MFD;
        this.#MFE = MFE;
        this.#MFS = MFS;
    }

    A_is(x)
    {
        return this.#MFA(x);
    }

    B_is(x)
    {
        return this.#MFB(x);
    }

    C_is(x)
    {
        return this.#MFC(x);
    }

    D_is(x)
    {
        return this.#MFD(x);
    }

    E_is(x)
    {
        return this.#MFE(x);
    }

    S_is()
    {
        return this.#MFS();
    }
}

export function genRules()
{
    let i = 0;
    let rules = new Array(numberRules);

    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_low, D_is_absent, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_low, D_is_absent, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_low, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_low, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_low, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_low, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_normal, D_is_absent, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_normal, D_is_absent, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_normal, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_normal, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_normal, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_normal, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_high, D_is_absent, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_high, D_is_absent, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_high, D_is_absent, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_high, D_is_traced, E_is_not_often, S_is_very_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_high, D_is_traced, E_is_normal, S_is_very_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_low, C_is_high, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_low, D_is_absent, E_is_not_often, S_is_other);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_low, D_is_absent, E_is_normal, S_is_other);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_low, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_low, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_low, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_low, D_is_traced, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_normal, D_is_absent, E_is_not_often, S_is_other);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_normal, D_is_absent, E_is_normal, S_is_good);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_normal, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_normal, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_normal, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_normal, D_is_traced, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_high, D_is_absent, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_high, D_is_absent, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_high, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_high, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_high, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_normal, C_is_high, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_low, D_is_absent, E_is_not_often, S_is_other);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_low, D_is_absent, E_is_normal, S_is_other);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_low, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_low, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_low, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_low, D_is_traced, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_normal, D_is_absent, E_is_not_often, S_is_other);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_normal, D_is_absent, E_is_normal, S_is_other);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_normal, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_normal, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_normal, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_normal, D_is_traced, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_high, D_is_absent, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_high, D_is_absent, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_high, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_high, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_high, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_young_middle, B_is_high, C_is_high, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_low, C_is_low, D_is_absent, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_low, D_is_absent, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_low, D_is_absent, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_low, C_is_low, D_is_traced, E_is_not_often, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_low, D_is_traced, E_is_normal, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_low, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_low, C_is_normal, D_is_absent, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_normal, D_is_absent, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_normal, D_is_absent, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_low, C_is_normal, D_is_traced, E_is_not_often, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_normal, D_is_traced, E_is_normal, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_normal, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_low, C_is_high, D_is_absent, E_is_not_often, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_high, D_is_absent, E_is_normal, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_high, D_is_absent, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_low, C_is_high, D_is_traced, E_is_not_often, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_high, D_is_traced, E_is_normal, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_low, C_is_high, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_low, D_is_absent, E_is_not_often, S_is_other);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_low, D_is_absent, E_is_normal, S_is_other);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_low, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_low, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_low, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_low, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_normal, D_is_absent, E_is_not_often, S_is_other);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_normal, D_is_absent, E_is_normal, S_is_good);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_normal, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_normal, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_normal, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_normal, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_high, D_is_absent, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_high, D_is_absent, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_high, D_is_absent, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_high, D_is_traced, E_is_not_often, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_high, D_is_traced, E_is_normal, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_normal, C_is_high, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_high, C_is_low, D_is_absent, E_is_not_often, S_is_other);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_low, D_is_absent, E_is_normal, S_is_other);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_low, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_old, B_is_high, C_is_low, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_low, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_low, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_high, C_is_normal, D_is_absent, E_is_not_often, S_is_other);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_normal, D_is_absent, E_is_normal, S_is_other);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_normal, D_is_absent, E_is_often, S_is_bad);


    rules[i++] = new Rule(A_is_old, B_is_high, C_is_normal, D_is_traced, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_normal, D_is_traced, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_normal, D_is_traced, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_high, C_is_high, D_is_absent, E_is_not_often, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_high, D_is_absent, E_is_normal, S_is_bad);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_high, D_is_absent, E_is_often, S_is_very_bad);


    rules[i++] = new Rule(A_is_old, B_is_high, C_is_high, D_is_traced, E_is_not_often, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_high, D_is_traced, E_is_normal, S_is_very_bad);
    rules[i++] = new Rule(A_is_old, B_is_high, C_is_high, D_is_traced, E_is_often, S_is_very_bad);


    return rules;
}
