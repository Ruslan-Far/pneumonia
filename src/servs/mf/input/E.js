import {left, middle, right} from "../common";

export function E_is_not_often(x)
{
    return left(12, 14, x);
}

export function E_is_normal(x)
{
    return middle(12, 21, 30, x);
}

export function E_is_often(x)
{
    return right(28, 30, x);
}
