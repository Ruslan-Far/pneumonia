export function left(a, b, x)
{
    if (x < a)
        return 1;
    if (x > b)
        return 0;
    return ((b - x) / (b - a));
}

export function middle(a, b, c, x)
{
    return (Math.max(Math.min((x - a) / (b - a), (c - x) / (c - b)), 0));
}

export function right(a, b, x)
{
    if (x <= a)
        return 0;
    if (x >= b)
        return 1;
    return ((b - x) / (b - a));
}
