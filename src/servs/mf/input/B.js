import {left, middle, right} from "../common";

export function B_is_low(x)
{
    return left(80, 90, x);
}

export function B_is_normal(x)
{
    return middle(80, 120, 160, x);
}

export function B_is_high(x)
{
    return right(150, 160, x);
}
