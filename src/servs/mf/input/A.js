import {left, middle, right} from "../common";

export function A_is_young_middle(x)
{
    return left(60, 65, x)
}

export function A_is_old(x)
{
    return right(60, 65, x)
}
