---
title: 'Convexity of preferences'
subject: micro
topic: 'Preferences and demand'
summary: 'Definition, the upper-contour-set view, and why convexity is what makes tangency work.'
order: 1
---

A preference relation $\succsim$ on $\mathbb{R}^2_+$ is **convex** if for every
bundle $z\in \mathbb{R}^2_+$, the upper contour set

$$
U(z) = \{\, w \in \mathbb{R}^2_+ : w \succsim z \,\}
$$

is a convex set. When preferences are represented by a utility function $u$,
this is equivalent to $u$ being quasi-concave:

$$
u\bigl(\lambda (x',y') + (1-\lambda)\, (x'',y'')\bigr) \;\ge\; \min\{u(x',y'),\, u(x'',y'')\} 
$$

for all  $\lambda \in [0,1]$ and for all $(x',y'), \ (x'',y'')  \in \mathbb{R}^2_+.$

## Why it matters for demand

When preferences are convex, the set of demanded bundles at any given prices
and income is a convex set. On a smooth, strictly convex indifference curve,
the first-order condition for an interior optimum is

$$
\mathrm{MRS}(x, y) \;=\; \frac{p_x}{p_y}
$$

and it locates the optimum of the utility maximisation problem, provided one
exists in the interior. With a non-convex upper contour set, the same
tangency condition can pick out the **worst** point on the budget line.
Moreover, the set of demanded bundles may fail to be convex.

At kinks the MRS is undefined, so even under convexity the optimum need not be
a tangency — it can sit at a kink or at a corner of the budget set. 

<!-- 
The
interactive tools on the [Microeconomics page]() let you watch all
three regimes as prices move.
-->

## A canonical example

The function

$$
u(x, y) = \min\{\, 2x,\; x + \ln y \,\}
$$

is quasi-concave but kinked along the locus $y = e^{x}$. Its demand has three
regimes — a corner on the $y$-axis, an interior tangency, and the kink — and
which one obtains depends only on prices and income.

<!--
> This note is a placeholder demonstrating the format. Notes are plain
> Markdown files with LaTeX between dollar signs; drop one into
> `src/content/notes/<subject>/` and it appears on the subject page
> automatically.
-->