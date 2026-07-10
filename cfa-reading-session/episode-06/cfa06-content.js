(function () {
  window.CFA_EPISODE_SIX = {
    title: "CFA Reading Session 06",
    kicker: "CFA Reading Session / Level I 2024",
    tagline: "Statistical Measures II",
    description:
      "Teleprompter script for a calm 40 to 55 minute reading session based on CFA Level I 2024 Volume 1, completing Learning Module 3 with measures of dispersion, skewness, kurtosis, correlation, and the module practice problems.",
    images: [],
    markdown: String.raw`# CFA READING SESSION 06

Versione teleprompter
Linea guida: "Calm, accurate, sleep-friendly"

Nota di lavoro:
- source base: CFA Level I 2024 Volume 1
- coverage: Learning Module 3 from the start of Measures of Dispersion through the end of the module solutions
- approximate PDF coverage for this episode: pages 112 to 142
- adapted for spoken delivery and pacing, without inventing facts beyond the source
- figures in flusso: original PDF page captures

## Opening

[Schermo: CFA Level I / Volume 1 / Session 06]

![Original PDF page 112 - close of prior box plot questions and opening of measures of dispersion](./visuals/pdf-original/page-112-original.png)

Welcome back to CFA Reading Session.

Tonight we complete Learning Module Three.

In the last session,
we ended with location and shape on the page,
but right at the threshold of a more practical question:

not just where returns sit,
but how they spread,
how they lean,
and how they move together.

Pausa.

So this episode has three quiet arcs.

First,
dispersion:
range,
mean absolute deviation,
variance,
standard deviation,
downside deviation,
and coefficient of variation.

Second,
shape:
skewness and kurtosis.

Third,
relationship:
scatter plots,
covariance,
correlation,
and the traps that come with interpreting correlation too quickly.

Pausa lunga.

And by the end,
we also clear the module practice problems and solutions,
so the whole learning module rests in one place.

This is one of those modules that can look modest on paper,
because the formulas are short.

But the interpretation is not modest at all.

The same average return can hide very different risk.

The same volatility can hide very different tail behavior.

And the same correlation can hide completely different pictures.

## Measures of Dispersion

[Schermo: Range / MAD / variance / standard deviation]

![Original PDF page 113 - range, MAD, and the opening of sample variance](./visuals/pdf-original/page-113-original.png)

The curriculum opens this section very simply.

If mean return speaks to reward,
dispersion speaks to risk and uncertainty.

Two investments can have the same average return,
and still feel completely different to hold,
because their returns may be tightly clustered,
or widely scattered,
around that same center.

Pausa.

The first measure is the range.

Range is maximum value minus minimum value.

That makes it easy.

But it also makes it thin.

It uses only two observations,
and it is very sensitive to outliers.

So it gives us a quick sense of width,
not a full portrait of the dataset.

Pausa.

Then we move to mean absolute deviation,
or MAD.

Here the idea is gentler and more complete:

take every observation,
measure how far it sits from the mean,
ignore the sign by taking the absolute value,
and average those distances.

MAD improves on range because it uses the full sample.

Its main drawback is not intuition.

Its drawback is mathematical convenience.

Compared with variance,
it is harder to manipulate in later statistical work.

![Original PDF page 114 - sample variance, standard deviation, and transition to downside risk](./visuals/pdf-original/page-114-original.png)

That is why variance and standard deviation become the dominant measures.

Variance squares each deviation from the mean.

By squaring,
negative and positive deviations no longer cancel each other out.

For a sample,
the curriculum divides by n minus one,
not by n.

That is the familiar degrees-of-freedom correction.

We estimate the population mean with the sample mean first,
so one piece of freedom is already used up.

Pausa.

Standard deviation is simply the square root of variance.

And that matters because variance lives in squared units,
while standard deviation comes back to the original unit of the data.

If returns are expressed in percent,
the standard deviation is also in percent.

That is one reason it is much easier to interpret in practice.

It is also why mean and standard deviation are usually presented together.

One gives the center.

The other tells us how uncertain that center really feels.

## Downside Deviation

[Schermo: Target semideviation / what sits below the hurdle]

![Original PDF page 115 - target downside deviation example begins](./visuals/pdf-original/page-115-original.png)

The next refinement is emotionally intuitive.

Standard deviation treats upside and downside variation symmetrically.

But investors often care more about what falls below a target.

Maybe the target is the mean.

Maybe it is a required return,
like three percent,
or six percent,
or any minimum acceptable hurdle.

The curriculum calls this target downside deviation,
or target semideviation.

We keep only observations at or below the target,
square those shortfalls,
sum them,
divide by total sample size minus one,
and then take the square root.

Pausa.

Example Three uses monthly portfolio returns:

- January: 5
- February: 3
- March: minus 1
- April: minus 4
- May: 4
- June: 2
- July: 0
- August: 4
- September: 3
- October: 0
- November: 6
- December: 5

With a target of three percent,
the months below that target are:
March,
April,
June,
July,
and October.

Their squared shortfalls add to eighty-four.

So the target semideviation is the square root of eighty-four divided by eleven,
which gives two point seven six three four percent.

If we slow the example down,
the eighty-four comes from five specific penalties:

- March: from minus 1 to the 3 percent target is minus 4, and squared that is 16
- April: from minus 4 to the 3 percent target is minus 7, and squared that is 49
- June: from 2 to the target is minus 1, and squared that is 1
- July: from 0 to the target is minus 3, and squared that is 9
- October: from 0 to the target is minus 3, and squared that is 9

Sixteen plus forty-nine plus one plus nine plus nine gives eighty-four.

February and September equal the target exactly,
so they create no downside penalty.

![Original PDF page 116 - semideviation table completes and standard deviation comparison begins](./visuals/pdf-original/page-116-original.png)

Then the book asks a conceptual follow-up.

If the target rises from three percent to four percent,
would the semideviation change?

Yes.

It would be larger.

A higher hurdle pulls more observations into the downside set,
and also increases the size of the shortfalls.

At four percent, for example,
the returns of three percent and two percent are no longer neutral.

They also become part of the downside story.

Pausa.

Example Four compares downside deviation with ordinary sample standard deviation,
using the same twelve monthly returns.

The arithmetic mean of those returns is two point two five percent,
because the sum is twenty-seven percent over twelve months.

When the squared deviations from that mean are added,
the total is ninety-six point two five.

![Original PDF page 117 - standard deviation and alternate target semideviation comparison](./visuals/pdf-original/page-117-original.png)

So the sample standard deviation is the square root of ninety-six point two five divided by eleven,
which is two point nine five eight percent.

This is the broader measure.

It counts January's upside surprise,
May's upside surprise,
August's upside surprise,
and November's upside surprise,
alongside the negative months.

It is measuring total variability around the mean,
not just disappointing variability below a hurdle.

Now compare that with target downside deviation.

If the target is two percent,
the downside squared deviations sum to fifty-three,
so the target semideviation becomes the square root of fifty-three divided by eleven,
or two point one nine five percent.

If the target is three percent,
we already know it is two point seven six three percent.

The ranking is clean:

- standard deviation: 2.958 percent
- target semideviation at 3 percent: 2.763 percent
- target semideviation at 2 percent: 2.195 percent

This is exactly what we would expect.

The more selective the downside definition,
the smaller the measured downside variability.

And that is why these measures can coexist without contradiction.

Standard deviation answers:
how spread out are all the observations around their center?

Target semideviation answers:
how spread out are the observations that miss my target?

## Coefficient of Variation And Dispersion Questions

[Schermo: Relative dispersion / risk per unit of reward]

![Original PDF page 118 - coefficient of variation definition and ROA example](./visuals/pdf-original/page-118-original.png)

After absolute dispersion,
the module turns to relative dispersion.

That is where the coefficient of variation,
or CV,
becomes useful.

The formula is simple:

standard deviation divided by mean.

So CV measures risk per unit of average reward.

And because it scales the dispersion by the size of the mean,
it lets us compare datasets that might otherwise feel difficult to compare.

Pausa.

Example Five looks at return on assets for two industries across ten companies.

The arithmetic mean return on assets is four percent for both industries.

That equality is deliberate.

The table is built so that the center is identical,
while the spread is not.

But the standard deviation is very different:

- Industry A: 5.60
- Industry B: 12.12

That gives CV values of:

- Industry A: 1.40
- Industry B: 3.03

So Industry B delivers much more variability per unit of average return.

You can almost see that before calculating.

Industry A runs from minus 5 to plus 11.

Industry B runs from minus 10 to plus 22.

Both add to the same total of forty,
but Industry B reaches much farther in both directions.

The book states the relative risk per unit of return is about two point one six times greater for Industry B,
because three point zero three divided by one point four zero is roughly two point one six.

![Original PDF page 119 - ROA comparison concludes and dispersion question set begins](./visuals/pdf-original/page-119-original.png)

Then the lesson closes with a small question set.

The first question uses MSCI World Index returns for Years Six through Ten:

- 30.79 percent
- 12.34 percent
- minus 5.02 percent
- 16.54 percent
- 27.37 percent

The arithmetic mean is sixteen point four zero percent.

The absolute deviations from that mean sum to fifty point nine eight percent.

Divide by five,
and MAD is ten point two zero percent.

The largest contribution comes from Year Eight,
where the return is minus 5.02 percent.

That single observation sits twenty-one point four two percentage points away from the mean,
which is why it weighs so heavily in the MAD total.

![Original PDF page 120 - MAD calculation and follow-up questions on three funds](./visuals/pdf-original/page-120-original.png)

Then the book compares three funds:

- Fund ABC
- Fund XYZ
- Fund PQR

Their means are minus four point zero,
minus ten point eight,
and minus five point zero percent,
respectively.

Their standard deviations are seventeen point eight,
fifteen point six,
and ten point five percent.

But the question asks for the highest mean absolute deviation,
not the highest standard deviation.

![Original PDF page 121 - dispersion question set solutions continue](./visuals/pdf-original/page-121-original.png)

The answers are:

- Fund ABC MAD: 14.4 percent
- Fund XYZ MAD: 9.8 percent
- Fund PQR MAD: 8.8 percent

So Fund ABC has the largest MAD.

That also makes intuitive sense.

Its returns include minus twenty,
plus twenty-three,
and two different years at minus fourteen.

Those are large absolute departures from its own mean of minus four.

Pausa.

The section ends with a gentle conceptual point.

Portfolio A and Portfolio B both have an arithmetic average return of three percent.

Portfolio A has a geometric return of two point eight five percent and a standard deviation of four percent.

Portfolio B also has an arithmetic mean of three percent,
but a higher standard deviation of six percent.

Therefore,
Portfolio B must have a geometric mean lower than two point eight five percent.

Same arithmetic center.

Greater dispersion.

Lower compound growth.

In other words,
holding the arithmetic mean constant,
more volatility creates more volatility drag.

That is one of the most important quiet lessons in the whole module.

## Measures Of Shape

[Schermo: Normality / skewness / kurtosis]

![Original PDF page 122 - opening of measures of shape and the normal distribution](./visuals/pdf-original/page-122-original.png)

Now the module leaves dispersion and asks a different question.

Even if we know the mean,
and even if we know the variance,
do we really know the shape of the distribution?

Not always.

The normal distribution is the benchmark.

It is symmetric,
bell-shaped,
and fully described by mean and variance.

Its mean,
median,
and mode are equal.

But many real return distributions need more description than that.

![Original PDF page 123 - positive and negative skewness](./visuals/pdf-original/page-123-original.png)

That is where skewness enters.

A positively skewed return distribution has frequent small losses and a few extreme gains.

A negatively skewed distribution has frequent small gains and a few extreme losses.

For a positively skewed unimodal distribution,
mode is less than median,
and median is less than mean.

For a negatively skewed unimodal distribution,
mean is less than median,
and median is less than mode.

This is why positive skew usually sounds attractive to investors.

You tolerate more small disappointments,
but keep the possibility of occasional large upside.

Negative skew often feels calmer in ordinary periods,
because you see frequent small gains,
yet it hides the possibility of a sharp loss.

Pausa.

Skewness is based on cubed deviations from the mean.

Cubing matters because,
unlike squaring,
it preserves the sign.

That lets the measure keep track of whether the tail pressure sits to the left or to the right.

![Original PDF page 124 - skewness approximation and opening of kurtosis](./visuals/pdf-original/page-124-original.png)

Then comes kurtosis.

Kurtosis is about tails.

More precisely,
it is about how much probability mass lives in very large deviations from the mean,
relative to a normal distribution.

A fat-tailed distribution is called leptokurtic.

A thin-tailed distribution is called platykurtic.

A distribution with tail behavior like the normal distribution is mesokurtic.

Pausa.

The curriculum emphasizes a useful distinction:

- kurtosis of 3.0 corresponds to the normal benchmark
- excess kurtosis of 0 corresponds to that same benchmark

So:

- excess kurtosis greater than 0 means fatter tails than normal
- excess kurtosis less than 0 means thinner tails than normal

The module also makes a subtle point that is worth hearing slowly.

Fat tails do not just mean more extreme events.

They also tend to mean more observations near the mean,
and fewer observations in the shoulder regions between center and tail.

![Original PDF page 125 - kurtosis summary and EAA equity index example](./visuals/pdf-original/page-125-original.png)

Example Six revisits the EAA Equity Index.

Its daily return statistics are:

- arithmetic mean: 0.0347 percent
- standard deviation: 0.8341
- skewness: minus 0.4260
- excess kurtosis: 3.7962

That tells us two things immediately.

First,
the distribution is negatively skewed.

Second,
it is strongly fat-tailed.

So the ordinary day may not look dramatic,
but the left tail carries more danger than a normal model would imply.

![Original PDF page 126 - negative skewness exhibit and trading-volume interpretation setup](./visuals/pdf-original/page-126-original.png)

The graph reinforces that interpretation.

The negative skewness means the extreme downside tail is heavier than the upside tail.

The positive excess kurtosis means very large deviations happen more often than a normal model would suggest.

The text also notes that the highest frequency of returns occurs just above the mean,
which is another way of saying the mode sits to the right of the mean while extreme negative observations pull the mean leftward.

That is a practical warning.

If we model fat-tailed returns as if they were normal,
we understate the probability of very bad and very good outcomes.

Pausa.

The module then uses daily trading volume to make the same ideas feel more concrete.

Average trading volume is eight point six million shares.

Standard deviation is four point nine million.

![Original PDF page 127 - histogram example and shape question set opening](./visuals/pdf-original/page-127-original.png)

The histogram is interpreted as positively skewed,
with actual skewness of two point one zero nine zero.

Why?

Because trading volume cannot go below zero,
and because unusually high trading days occur infrequently but dramatically,
for example around company-specific announcements.

The same histogram also shows excess kurtosis.

The actual excess kurtosis is five point two one five one.

So the right tail is fat,
and the center is more concentrated than a normal distribution would predict.

That combination is common in real market data.

Most days look ordinary.

A few days do not.

![Original PDF page 128 - shape question set solutions and cross-section return statistics](./visuals/pdf-original/page-128-original.png)

The question set is compact and useful.

If excess kurtosis is minus zero point seven five,
the distribution is thin-tailed relative to normal.

Then the module gives a cross-section of annual returns for two hundred fifty-two stocks:

- arithmetic average: 9.986 percent
- geometric mean: 9.909 percent
- variance: 0.001723
- skewness: 0.704
- excess kurtosis: 0.503

From this:

- the coefficient of variation is about 0.416
- the distribution is positively skewed
- and the tails carry more probability than the normal distribution

So even before correlation begins,
the module has already taught an important habit:

look past the mean.

Look past volatility alone.

Ask whether the upside and downside are balanced,
and whether the tails are ordinary or dangerous.

## Correlation Between Two Variables

[Schermo: Scatter plots / covariance / correlation]

![Original PDF page 129 - correlation lesson opens with IT versus S&P 500 scatter plot](./visuals/pdf-original/page-129-original.png)

The final lesson of the module asks how two variables move together.

It begins with the scatter plot.

That is a good choice,
because correlation should almost always start with a picture.

The first exhibit compares information technology sector returns with the S&P 500.

The dots cluster fairly tightly along an upward path.

That suggests a strong positive association.

Not proof.

Not a final estimate.

But a credible visual starting point.

![Original PDF page 130 - utilities versus S&P 500 and the transition to covariance](./visuals/pdf-original/page-130-original.png)

The second exhibit compares utilities with the S&P 500.

Here the picture is looser,
with no clean linear pattern.

That suggests little or no clear relationship.

The curriculum highlights three things scatter plots do well:

- they reveal whether an association may exist
- they show range through the spread of points on the axes
- they help us spot outliers

That last use is especially important in finance,
where one unusual month can distort an apparently clean relation.

Pausa.

From there,
the module formalizes the idea with covariance.

![Original PDF page 131 - sample covariance and sample correlation formulas](./visuals/pdf-original/page-131-original.png)

Sample covariance measures how two variables vary together around their own means.

If they tend to be above their means at the same time,
covariance is positive.

If one tends to be above its mean when the other is below,
covariance is negative.

But covariance is awkward to read by itself,
because its magnitude depends on the scale of the variables.

That is why we normalize it into correlation:

sample covariance divided by the product of the two standard deviations.

Once standardized,
the measure becomes unit-free.

That is what makes correlation portable across different datasets.

Pausa.

The resulting correlation coefficient ranges from minus one to plus one.

- plus one means a perfect positive linear relationship
- minus one means a perfect inverse linear relationship
- zero means no linear relationship

And that last phrase matters.

No linear relationship
does not mean
no relationship at all.

![Original PDF page 132 - visual examples of plus one, minus one, zero, and nonlinear patterns](./visuals/pdf-original/page-132-original.png)

The scatter-plot exhibit makes this visible.

One panel shows perfect positive correlation.

Another shows perfect negative correlation.

Another shows zero correlation.

And then the most important panel shows a strong nonlinear relationship.

The dots clearly follow a pattern,
but not a linear one.

So correlation is not the right summary there.

This is one of the module's best cautions:

correlation measures linear association,
not every kind of association.

Two variables can move in lockstep along a curve and still produce a misleadingly low correlation.

![Original PDF page 133 - outliers, causation warning, and spurious correlation](./visuals/pdf-original/page-133-original.png)

The next caution is interpretive.

Correlation can be distorted by outliers.

So if extreme observations are present,
we have to decide whether they are noise,
or real information.

Sometimes trimming or winsorizing helps.

Sometimes it hides signal.

Judgment matters.

Pausa.

Then comes the classic warning:

correlation does not imply causation.

The book also gives three flavors of spurious correlation:

- a chance relationship in a particular dataset
- a relationship induced by dividing both variables by a third variable
- a relationship created because both variables are linked to a third factor

Its memorable example is the correlation between US retail sales of beer, wine, and liquor,
and atmospheric carbon dioxide from 2000 to 2018.

The correlation is zero point eight two four.

Statistically positive.

Economically meaningless.

That is the sort of number that can seduce an analyst who skips the story and trusts the coefficient alone.

![Original PDF page 134 - Anscombe's quartet summary statistics](./visuals/pdf-original/page-134-original.png)

Example Seven then brings the lesson home with Anscombe's Quartet.

Four datasets.

The same summary statistics.

Yet very different shapes.

For all four datasets:

- mean of X: 9.00
- standard deviation of X: 3.32
- mean of Y: 7.50
- standard deviation of Y: 2.03
- correlation between X and Y: 0.82

And still,
the underlying pictures are different.

Dataset Two bends.

Dataset Three is mostly linear but depends heavily on one outlier.

Dataset Four is almost a vertical stack with one leverage point doing most of the work.

![Original PDF page 135 - visual depiction of Anscombe's quartet and correlation question set](./visuals/pdf-original/page-135-original.png)

The four patterns are:

- Dataset I: approximately linear
- Dataset II: curvilinear
- Dataset III: linear except for one outlier
- Dataset IV: nearly constant X except for one outlier

That is why a single correlation coefficient,
or even correlation plus mean and standard deviation,
never tells the whole story.

Always look at the data.

![Original PDF page 136 - covariance sign questions in the correlation set](./visuals/pdf-original/page-136-original.png)

The correlation question set is straightforward.

A correlation of zero point three four means a positive association.

Not causation.

Not necessarily curvature.

Just positive association.

The next question asks what can undermine interpretation.

The answer is:

both outliers and spurious correlation.

Then the module gives monthly data for a portfolio,
a bond index,
and a real estate index.

The averages are:

- portfolio: 5.5 percent
- bond index: 3.2 percent
- real estate index: 7.8 percent

The standard deviations are:

- portfolio: 8.2
- bond index: 3.4
- real estate index: 10.3

And the key covariance values are:

- portfolio with bond index: 18.9
- portfolio with real estate index: minus 55.9

![Original PDF page 137 - final correlation question set answers](./visuals/pdf-original/page-137-original.png)

From sign alone,
we know the first correlation is positive,
and the second is negative.

The final question makes one more subtle point.

If variable A has a mean of minus zero point five six,
and variable B has a mean of zero point two three,
but covariance is positive,
then correlation is still positive.

The sign of correlation follows the sign of covariance,
not the sign of the means.

## Practice Problems

[Schermo: Learning Module 3 / practice set and solutions]

![Original PDF page 138 - module practice problems begin with percentiles and bins](./visuals/pdf-original/page-138-original.png)

The module practice problems mostly circle back to the first half of Learning Module Three:

percentiles,
quartiles,
interquartile range,
standard deviation,
target semideviation,
and coefficient of variation.

That makes sense.

These are the computational tools the candidate is most likely to be asked to use quickly.

Pausa.

Questions one through five use a grouped market-capitalization table for one hundred firms.

The answers are:

- tenth percentile: bins 1 and 2
- second quintile: bins 5 through 8
- fourth quartile: bins 16 through 20
- median: 46.88
- interquartile range: 23.62

These are not difficult calculations,
but they reward calm attention to definitions.

Percentiles divide observations into one-hundredths,
quintiles into fifths,
quartiles into fourths,
and the interquartile range measures the width of the middle fifty percent.

![Original PDF page 139 - practice problems continue with the MSCI world return question](./visuals/pdf-original/page-139-original.png)

Question six uses ten years of MSCI World Index returns and asks for the fourth quintile,
which is the eightieth percentile.

The sorted data place that percentile at location eight point eight.

So it lies between the eighth and ninth observations:

- 20.65 percent
- 27.37 percent

Using linear interpolation,
the answer is twenty-six point zero three percent.

The arithmetic is gentle.

Take the gap between twenty point six five and twenty-seven point three seven,
which is six point seven two.

Then take eighty percent of that gap because the location is eight point eight,
not eight point two.

That gives five point three eight.

Add that to twenty point six five,
and you arrive at twenty-six point zero three.

![Original PDF page 140 - final practice questions on standard deviation, semideviation, and CV](./visuals/pdf-original/page-140-original.png)

Questions seven through nine turn back to dispersion.

For the ten-year fund return series:

- standard deviation is 2.5276 percent
- target semideviation at a 2 percent target is 1.5 percent

The standard deviation comes from a squared-deviation sum of zero point zero zero five seven five zero,
divided by nine,
and then square-rooted.

The target semideviation comes from the below-target squared sum of zero point zero zero two zero two five,
also divided by nine,
and then square-rooted.

Then the sector comparison asks which industry is riskiest using CV.

The numbers are:

- Utilities: 1.23 divided by 2.10 = 0.59
- Materials: 1.35 divided by 1.25 = 1.08
- Industrials: 1.52 divided by 3.01 = 0.51

So the riskiest sector on a risk-per-unit-of-return basis is Materials.

That answer is driven by a simple tension:

Materials has the lowest mean return of the three sectors,
but a standard deviation that is not low enough to compensate for that smaller reward.

![Original PDF page 141 - solutions for percentile, quartile, and interpolation questions](./visuals/pdf-original/page-141-original.png)

The solutions section confirms the same logic patiently.

It walks through the percentile bins,
the median of forty-six point eight eight,
the interquartile range of twenty-three point six two,
and the interpolation for the MSCI World return question.

![Original PDF page 142 - solutions for standard deviation, target semideviation, and sector CV](./visuals/pdf-original/page-142-original.png)

And it closes with the final three numerical checks:

- standard deviation: 2.5276 percent
- target semideviation: 1.5 percent
- coefficient of variation ranking: Materials first, then Utilities, then Industrials

That finishes Learning Module Three cleanly.

## Closing

[Schermo: Session recap / Learning Module 3 complete]

Tonight we moved from center
to spread,
from spread
to shape,
and from shape
to relationship.

We covered:

- range and MAD
- variance and standard deviation
- target downside deviation
- coefficient of variation
- skewness
- kurtosis
- scatter plots
- covariance
- correlation
- and the module practice problems

Pausa lunga.

If there is one soft lesson beneath all the formulas,
it is this:

an average is never enough.

We need to know how widely outcomes move,
which side gets the heavier surprises,
and whether two things that move together actually belong together.

Next time,
the book turns the page and opens a new module:

Probability Trees and Conditional Expectations.

Rest well.
Study well.
And I will see you in the next reading session.
`
  };
})();
