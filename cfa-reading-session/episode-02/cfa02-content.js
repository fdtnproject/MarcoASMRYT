(function () {
  window.CFA_EPISODE_TWO = {
    title: "CFA Reading Session 02",
    kicker: "CFA Reading Session / Level I 2024",
    tagline: "Rates and Returns II",
    description:
      "Teleprompter script for a calm 45 to 60 minute reading session based on CFA Level I 2024 Volume 1, completing Learning Module 1: money-weighted return, time-weighted return, annualized return, continuously compounded returns, and other major return measures.",
    images: [],
    markdown: String.raw`# CFA READING SESSION 02

Versione teleprompter
Linea guida: "Calm, accurate, sleep-friendly"

Nota di lavoro:
- source base: CFA Level I 2024 Volume 1
- coverage: Learning Module 1 continuation, from the end-of-section recap through the transition into practice problems
- approximate PDF coverage for this episode: pages 30 to 50
- adapted for spoken delivery and pacing, without inventing facts beyond the source
- figures in flusso: original PDF page captures

## Opening

[Schermo: CFA Level I / Volume 1 / Rates and Returns II]

Welcome back to CFA Reading Session.

Tonight we stay inside the same learning module,
Rates and Returns,
but we move into a much more practical part of the reading.

Pausa.

In episode one,
we spent time with holding period return,
arithmetic mean return,
geometric mean return,
harmonic mean,
and the broad logic of what each measure is trying to describe.

Tonight,
the curriculum asks a sharper question.

What happens when money moves into a portfolio,
or out of a portfolio,
at different times.

Pausa.

That question matters because two investors can hold the same assets,
live through the same market path,
and still earn different realized returns.

The difference comes from timing.

When the money arrived.
When it left.
How much was exposed during the good periods.
How much was exposed during the bad ones.

Pausa lunga.

So this session is built around five connected ideas.

- money-weighted return
- time-weighted return
- annualized return
- continuously compounded return
- and a final group of special return measures that investors actually use in the real world

Those special measures include gross and net returns,
pre-tax and after-tax returns,
real returns,
and leveraged returns.

Pausa.

We will move slowly through the examples.

We will keep the formulas honest.

And we will let the structure do the work.

## Question Set Recap

[Schermo: Decision tree and ten-year return series]

![Original PDF page 30 - Exhibit 8 and Exhibit 9, deciding which measure to use](./visuals/pdf-original/page-030-original.png)

![Original PDF page 31 - geometric mean question and start of money-weighted return section](./visuals/pdf-original/page-031-original.png)

Before the new material really begins,
the reading closes the previous section with a useful recap.

Exhibit Eight asks a simple decision question.

If you want to include all observations as they are,
you may be looking for an arithmetic mean.

If compounding matters,
you begin thinking about the geometric mean.

And if ratios and extreme outliers are the real problem,
you begin thinking about harmonic,
trimmed,
or winsorized means.

Pausa.

Then the curriculum gives a ten-year return series.

The annual returns are:

- four point five percent
- six point zero percent
- one point five percent
- negative two point zero percent
- zero point zero percent
- four point five percent
- three point five percent
- two point five percent
- five point five percent
- four point zero percent

Pausa.

The arithmetic mean over those ten years is three point zero percent.

That result is clean because the total of the annual returns is thirty point zero percent,
and thirty divided by ten gives three point zero.

Pausa.

The geometric mean is slightly lower.

It comes out to about two point nine seven one seven percent.

That is the return you get when you compound the ten yearly price relatives together,
take the tenth root,
and subtract one.

Pausa.

So even before the new section begins,
the curriculum reminds us of something important.

A simple average and a compounded average are not the same thing.

And once timing enters the story,
the gap can grow wider still.

That is our bridge into money-weighted and time-weighted return.

## Money-Weighted Return

[Schermo: Internal rate of return and investor experience]

The arithmetic mean and the geometric mean do not account for the timing of cash flows into and out of a portfolio.

That is the central motivation for this section.

If most of the money was invested just before a weak period,
the investor experience may be disappointing,
even if the asset path looks respectable on average.

If only a tiny amount was invested during the weak period,
the same market path may feel much better.

Pausa.

The curriculum defines the money-weighted return as a return measure that accounts for the money actually invested.

Its calculation is similar to the internal rate of return,
and similar in spirit to a bond's yield to maturity.

Pausa.

From the investor's perspective,
amounts invested are cash outflows.

Amounts received,
withdrawn,
or left in the portfolio at the end of the investment cycle are cash inflows.

That sign convention matters.

It is what lets the internal rate of return equation hold together.

A Three-Year Fund Example.

![Original PDF page 32 - Exhibit 10, portfolio balances across three years](./visuals/pdf-original/page-032-original.png)

The first full example is a three-year mutual fund path.

An investor puts in one hundred euro at the beginning of the first year.

At the beginning of the second year,
she adds another nine hundred fifty euro.

At the end of the second year,
she withdraws three hundred fifty euro.

At the end of the third year,
the remaining balance is one thousand two hundred seventy euro.

Pausa.

The yearly investment returns on the fund are:

- negative fifty percent in year one
- positive thirty-five percent in year two
- positive twenty-seven percent in year three

Pausa.

The cash flow sequence from the investor's point of view is:

- at time zero, negative one hundred
- at time one, negative nine hundred fifty
- at time two, positive three hundred fifty
- at time three, positive one thousand two hundred seventy

Pausa.

The money-weighted return is the discount rate that makes the present value of those cash flows equal to zero.

When the curriculum solves that internal rate of return,
the answer is twenty-six point one one percent per year.

Pausa lunga.

That number sounds surprisingly high if you still remember the negative fifty percent year.

But the timing explains it.

Only a small amount of money was exposed during the disastrous first year.

Far more capital was invested later,
after the worst damage had already happened.

So the investor's own euros had a much kinder experience than the raw sequence of annual returns might suggest.

Pausa.

This is the emotional intuition of money-weighted return.

It is not asking,
"What did the portfolio path look like?"

It is asking,
"What return did the investor earn on the actual money she committed?"

A Dividend-Paying Stock Example.

![Original PDF page 33 - Exhibit 11, cash flows for a dividend-paying stock](./visuals/pdf-original/page-033-original.png)

The reading then gives a dividend-paying stock example across a two-year horizon.

At time zero,
the investor buys one share for two hundred dollars.

At time one,
he buys a second share for two hundred twenty-five dollars.

During the first year,
the first share pays a five-dollar dividend,
and that dividend is not reinvested.

At the end of year two,
the investor receives ten dollars of dividends from two shares,
and sells both shares at two hundred thirty-five dollars each,
for total sale proceeds of four hundred seventy dollars.

Pausa.

Grouped by time,
the net cash flows become:

- time zero: negative two hundred
- time one: negative two hundred twenty
- time two: positive four hundred eighty

The time one cash flow is negative two hundred twenty because the investor paid two hundred twenty-five for the new share,
but received five dollars of dividend income.

Pausa.

The internal rate of return on those cash flows,
the money-weighted return,
is nine point three nine percent.

Pausa.

Then the curriculum slows down and shows what happened inside each year.

In year one,
the one-period holding period return is fifteen percent.

That comes from five dollars of dividend income,
plus a price change from two hundred to two hundred twenty-five,
all divided by the initial two hundred dollars.

Pausa.

At the beginning of year two,
the amount invested is four hundred fifty dollars.

That is two shares priced at two hundred twenty-five each.

Because the first dividend was spent rather than reinvested,
the portfolio does not begin year two at four hundred fifty-five.

It begins at four hundred fifty.

Pausa.

At the end of year two,
the portfolio distributes ten dollars of dividends,
and the liquidation value is four hundred seventy dollars.

So the second-year holding period return is six point six seven percent.

Pausa.

The simple mean of the two annual holding period returns is ten point eight four percent.

But the money-weighted return is only nine point three nine percent.

Why?

Because more money was invested during the weaker second year than during the stronger first year.

Pausa lunga.

That is a beautiful example because it makes the weighting visible.

The method is called money weighted for a reason.

Returns earned when more money is at work matter more.

The curriculum also points out an important limitation.

Money-weighted return is excellent for describing what one investor actually earned.

But it is not always the best measure for comparing managers,
comparing investment opportunities,
or comparing two investors who contributed different amounts at different times.

Rhein Valley Superior Fund.

![Original PDF page 34 - Example 8, Rhein Valley Superior Fund performance and Exhibit 13](./visuals/pdf-original/page-034-original.png)

![Original PDF page 35 - Example 8, geometric mean and money-weighted test](./visuals/pdf-original/page-035-original.png)

The curriculum then revisits a five-year mutual fund case called the Rhein Valley Superior Fund.

The annual returns are:

- year one, positive fifteen percent
- year two, negative five percent
- year three, positive ten percent
- year four, positive fifteen percent
- year five, positive three percent

Pausa.

The fund's five-year holding period return is forty-two point three five percent.

That comes from multiplying:

one point one five,
times zero point nine five,
times one point one zero,
times one point one five,
times one point zero three,
then subtracting one.

Pausa.

The arithmetic mean annual return is seven point six zero percent.

The geometric mean annual return is seven point three two percent.

So even before cash flow timing is added,
the usual ordering still holds:

geometric below arithmetic.

Pausa.

But now the cash flow pattern from the investor side is layered on top.

The net investor cash flows are:

- time zero, negative thirty point zero zero million
- time one, negative ten point five zero million
- time two, positive twenty-two point seven five million
- time three, negative three point zero zero million
- time four, negative six point two five million
- time five, positive thirty-six point zero five million

Pausa.

The curriculum first asks whether the money-weighted annual return is greater than five percent.

At a five percent discount rate,
the present value of those net cash flows is positive,
about one point one four seven one.

Because the present value is still above zero,
five percent is not high enough to solve the IRR equation.

So the money-weighted return must be greater than five percent.

Pausa.

The exact money-weighted annual return is five point eight six percent.

That is lower than the geometric mean annual return of seven point three two percent.

Again,
the message is not that one answer is wrong.

The message is that they answer different questions.

The geometric mean summarizes the fund's compounded growth path.

The money-weighted return summarizes the investor's realized experience once the pattern of contributions and withdrawals is taken seriously.

## Time-Weighted Return

[Schermo: Breaking the path into subperiods]

The time-weighted rate of return is designed for a different purpose.

It measures the compound rate of growth of one dollar,
or one euro,
initially invested in the portfolio over a stated measurement period.

Its goal is to neutralize the effect of cash additions and withdrawals that are typically outside the manager's control.

Pausa.

That is why the curriculum says time-weighted return is the preferred performance measure for portfolios of publicly traded securities.

When we want to evaluate the manager,
we do not want the manager punished because a client added capital at a bad moment,
or rewarded because a client happened to add capital at a good moment.

The Exact Procedure.

To compute an exact time-weighted return,
the curriculum gives a three-step procedure.

1. Value the portfolio immediately before each significant cash inflow or outflow.
2. Compute the holding period return for each subperiod.
3. Link those subperiod returns together by compounding them.

If the measurement period covers more than one year,
we then take the geometric mean of the annual time-weighted returns.

Pausa.

The reading also gives a practical note.

Exact valuation before every significant cash flow can be expensive.

So in practice,
frequent regular valuation,
often daily,
can provide a very good approximation.

The more frequent the valuation,
the better the approximation.

Returning To The Dividend Stock.

Before moving to the large institutional examples,
the curriculum returns to the same dividend-paying stock example we just used for money-weighted return.

The two yearly holding period returns were already known:

- fifteen percent in year one
- six point six seven percent in year two

Pausa.

To get the time-weighted return over the two-year horizon,
we geometrically link those two one-year returns.

That means:

one plus the time-weighted return,
squared,
must equal one point one five times one point zero six six seven.

So the annual time-weighted return is the square root of that product,
minus one.

The result is ten point seven six percent.

Pausa.

That sits above the money-weighted return of nine point three nine percent.

And it does so for a clear reason.

The time-weighted measure removes the effect of having more money invested in the weaker second year.

Strubeck And Super Trust.

![Original PDF page 37 - Example 9 and Exhibit 14, in-house versus Super Trust account](./visuals/pdf-original/page-037-original.png)

The next example compares two portfolios managed for a pension plan.

One account is run in-house.

The other is run by Super Trust.

Cash inflows and outflows occur at the very beginning of each quarter,
which makes the holding period calculations especially clean.

Pausa.

For the in-house account,
the quarterly holding period returns are:

- first quarter, twenty percent
- second quarter, five percent
- third quarter, twelve percent
- fourth quarter, negative ten percent

Linking those four quarterly returns produces an annual time-weighted return of twenty-seven point zero one percent.

Pausa.

For the Super Trust account,
the quarterly holding period returns are:

- first quarter, ten percent
- second quarter, two percent
- third quarter, eight percent
- fourth quarter, four percent

Linking those four returns produces an annual time-weighted return of twenty-six point zero two percent.

Pausa.

So the in-house account outperformed by ninety-nine basis points.

Not one hundred basis points.

Ninety-nine.

The curriculum explicitly notes that rounding twenty-seven point zero one to twenty-seven,
and twenty-six point zero two to twenty-six,
makes the gap look like a clean one hundred basis points.

But precise arithmetic gives ninety-nine.

That small detail matters on large pools of capital.

Pausa lunga.

This example also reinforces why time-weighted return is so useful for manager evaluation.

Both accounts experienced external cash movements.

The method filters those out and concentrates on the investment path itself.

## Money-Weighted Versus Time-Weighted

[Schermo: Same portfolio, two different stories]

![Original PDF page 39 - Exhibit 15, cash flows for the Walbright Fund](./visuals/pdf-original/page-039-original.png)

![Original PDF page 40 - Walbright Fund money-weighted return and comparison](./visuals/pdf-original/page-040-original.png)

The Walbright Fund example is the cleanest side-by-side comparison in this part of the reading.

On the first day of the year,
the fund is worth one hundred million dollars.

Between the first of January and the first of May,
the stocks generate a capital gain of ten million dollars.

On the first of May,
the fund receives two million dollars of dividends,
and all of those dividends are reinvested.

Because recent performance looked excellent,
outside institutions add another twenty million dollars on the first of May.

That lifts the assets under management at that moment to one hundred thirty-two million dollars.

Pausa.

By the end of the year,
the fund receives another two point six four million dollars of dividends.

Its market value,
not counting that dividend cash,
is one hundred forty million dollars.

Pausa.

To compute the time-weighted return,
the year is broken into two subperiods.

The first runs from one January to one May.

The second runs from one May to thirty-one December.

Pausa.

The first subperiod holding period return is twelve percent.

That comes from the ten-million capital gain plus the two-million dividend,
all on the original one-hundred-million base.

Pausa.

The second subperiod begins with one hundred thirty-two million dollars invested.

By the end of the year,
the fund has a one-hundred-forty-million market value and two point six four million of dividends.

That gives an eight-month holding period return of eight point zero six percent.

Pausa.

Now we link the two subperiod returns.

One point one two,
times one point zero eight zero six,
minus one,
gives a one-year time-weighted return of twenty-one point zero three percent.

Pausa.

The money-weighted calculation tells a different story.

Here the cash flows occur at four-month intervals,
so the internal rate of return is first solved on a four-month basis.

The net cash flows are:

- time zero, negative one hundred
- time one, negative twenty
- time two, zero
- time three, positive one hundred forty-two point six four

Pausa.

Solving the IRR equation gives a four-month internal rate of return of six point two eight percent.

To annualize that more accurately,
the curriculum compounds it:

one point zero six two eight,
raised to the third power,
minus one.

That gives twenty point zero five percent.

Pausa lunga.

So here the time-weighted return,
twenty-one point zero three percent,
is above the money-weighted return,
twenty point zero five percent.

Why?

Because the fund's weaker performance happened during the later,
longer interval,
after more money had been committed.

Pausa.

This is the clean rule of thumb:

- money-weighted return tells us what the investor actually earned on dollars invested
- time-weighted return tells us how the portfolio path performed once investor cash flow timing is neutralized

And the curriculum adds one more caution.

Return by itself is not enough to declare one manager better than another.

Risk still has to be considered.

A higher time-weighted return does not automatically mean superior management if it came with meaningfully greater risk.

## Annualized Return

[Schermo: Scaling returns to a common horizon]

![Original PDF page 42 - monthly compounding and annualizing return formulas](./visuals/pdf-original/page-042-original.png)

![Original PDF page 43 - Example 12 and Exhibit 16, ETF performance information](./visuals/pdf-original/page-043-original.png)

The next section changes the question again.

Now the issue is not cash flow timing.

Now the issue is horizon.

How do we compare a return earned over a week,
or fifteen days,
or eighteen months,
with a return quoted on an annual basis.

Pausa.

The answer is annualization.

We express returns on a common yearly scale so that comparison becomes easier.

This is common in practice because so many formulas,
pricing models,
and market conventions assume annualized rates.

Pausa.

Before annualizing returns directly,
the curriculum briefly revisits non-annual compounding through a present value example.

A Canadian pension manager needs five million Canadian dollars in ten years.

Guaranteed investment contracts yield six percent per year,
compounded monthly.

The monthly periodic rate is zero point zero zero five,
because six percent divided by twelve is zero point five percent per month.

Over ten years,
that means one hundred twenty monthly periods.

Pausa.

Discounting the five-million future value back by those one hundred twenty monthly periods gives a present value of two million,
seven hundred forty-eight thousand,
one hundred sixty-three dollars and sixty-seven cents.

That is the amount that must be invested today.

Pausa.

Then the reading returns to annualizing returns more directly.

If a weekly return is zero point two percent,
the annualized compound return is not ten point four percent from simple multiplication.

It is ten point nine five percent,
because we compound:

one point zero zero two,
raised to the fifty-second power,
minus one.

Pausa.

If the return for fifteen days is zero point four percent,
the annualized return is ten point two zero percent,
assuming three hundred sixty-five days in a year.

That uses:

one point zero zero four,
raised to the power of three hundred sixty-five over fifteen,
minus one.

Pausa.

The general annualization formula is:

one plus the periodic return,
raised to c,
minus one,

where c is the number of such periods in a year.

For months,
c is twelve.

For quarters,
c is four.

For an eighteen-month holding period,
c is two-thirds,
because one year contains two-thirds of an eighteen-month period.

Pausa.

So an eighteen-month return of twenty percent annualizes to twelve point nine two percent.

That is a good example to remember because it reminds us that annualization can work in both directions.

The holding period does not have to be shorter than a year.

Pausa lunga.

The curriculum also mentions other conversions.

To move from daily returns to weekly returns,
we might use c equal to five if we are thinking in trading days.

To move from annual returns to weekly returns,
we use c equal to one over fifty-two.

And the text warns that business practice matters.

Some calculations use five trading days.

Others use seven calendar days.

The method should match the convention being used.

The Limitation Of Annualizing.

One of the best lines in this section is the warning that annualizing returns silently assumes repeatability.

It assumes the same return can be earned again and again under similar conditions.

That assumption is often unrealistic.

Pausa.

The example is dramatic.

If an investor earns five percent in one unusually strong week,
annualizing that as if it could repeat for fifty-two weeks produces an absurd annualized return of one thousand one hundred sixty-four point three percent.

So annualization is useful.

But it should be handled with judgment.

Comparing Securities And ETFs.

Example Twelve compares three securities held for different lengths of time.

- Security A earns six point two percent over one hundred days
- Security B earns two percent over four weeks
- Security C earns five percent over three months

After annualizing,
their returns become:

- Security A, twenty-four point five five percent
- Security B, twenty-nine point three six percent
- Security C, twenty-one point five five percent

So Security B has the highest annualized return.

Pausa.

Example Thirteen repeats the idea with three exchange-traded funds.

The raw since-inception returns are not immediately comparable because the time spans differ.

ETF One has returned four point six one percent over one hundred forty-six days.

ETF Two has returned one point one zero percent over five weeks.

ETF Three has returned fourteen point three five percent over fifteen months.

Annualized,
those become:

- ETF One, eleven point nine three percent
- ETF Two, twelve point zero five percent
- ETF Three, eleven point three two percent

So ETF Two comes out on top,
despite having the smallest raw periodic return.

That happens because of compounding and the reinvestment assumption built into annualization.

## Continuously Compounded Returns

[Schermo: Log returns and additivity]

![Original PDF page 44 - ETF annualization answer and start of continuously compounded returns](./visuals/pdf-original/page-044-original.png)

The reading then introduces continuously compounded returns,
often called log returns.

The continuously compounded return associated with a holding period return is the natural logarithm of one plus that holding period return.

Equivalently,
it is the natural logarithm of ending price divided by beginning price.

Pausa.

If the one-week holding period return is four percent,
the equivalent continuously compounded return is the natural log of one point zero four,
which is zero point zero three nine two two one.

That number looks smaller than four percent,
and it is.

But it produces the same ending wealth once translated back through the exponential function.

Pausa.

The curriculum gives a simple price example too.

If an asset rises from thirty dollars to thirty-four dollars and fifty cents,
the holding period return is fifteen percent.

The continuously compounded return is the natural log of one point one five,
which is zero point one three nine seven six two,
or about thirteen point nine eight percent.

Pausa.

The key advantage is not that the number is prettier.

The key advantage is that continuously compounded returns add across time.

Holding period returns must be linked through multiplication of price relatives.

Log returns can be summed.

That additive property is elegant,
useful,
and heavily used later in finance.

## Other Major Return Measures

[Schermo: Gross, net, taxes, inflation, leverage]

![Original PDF page 45 - start of other major return measures and gross versus net return](./visuals/pdf-original/page-045-original.png)

![Original PDF page 47 - Example 14, computation of special returns](./visuals/pdf-original/page-047-original.png)

![Original PDF page 48 - leveraged return and Exhibit 17](./visuals/pdf-original/page-048-original.png)

The final section of this episode gathers several applied return measures that matter in real investing.

These are not new because the old measures failed.

They are new because practical investing adds frictions,
taxes,
inflation,
fees,
and leverage.

Pausa.

Gross And Net Return.

Gross return is the return earned before deductions for management expenses,
custodial fees,
taxes,
and other administrative costs.

Trading costs such as commissions are different.

Those are directly tied to generating the return,
so they are included in the gross-return calculation as a cost.

Pausa.

Gross return is useful when evaluating manager skill.

It tries to isolate the investment performance from the separate issue of how much the investment vehicle charges to operate.

Pausa.

Net return is what the investment vehicle actually earned for the investor after managerial and administrative expenses are deducted.

That is closer to what small investors care about,
because it reflects what they really receive.

The curriculum notes that small funds can be disadvantaged here because fixed costs are spread over a smaller asset base.

Pre-Tax, After-Tax, And Real Return.

By default,
the curriculum treats the return measures discussed so far as pre-tax nominal returns,
unless otherwise stated.

That means no adjustment has yet been made for taxes or inflation.

Pausa.

Taxable investors care about after-tax nominal return because taxes reduce what remains in hand.

And different sources of return may be taxed differently.

Interest income,
short-term gains,
long-term gains,
and dividends do not always face the same tax treatment.

Pausa.

Real return then adjusts for inflation.

It asks how much purchasing power actually increased,
not just how many currency units appeared on paper.

The logic is:

one plus real return equals one plus nominal return,
divided by one plus inflation.

Pausa.

The after-tax real return is especially meaningful because it is the return that remains after both tax drag and inflation drag have been recognized.

That is the investor's truest reward for postponing consumption and bearing risk.

Example 14.

The curriculum returns once more to the Rhein Valley Superior Fund.

Mr. Lohrmann learns that the fund incurs a fixed five-hundred-thousand-euro annual expense unrelated to the manager's actual investment skill.

He also expects a twenty percent tax rate on investment returns,
and assumes inflation around two percent.

Pausa.

The reported investor return in year one was fifteen percent.

Because the fund began that year with thirty million euro,
adding back the five-hundred-thousand-euro fixed expense increases the return by one point six seven percent.

So the gross return for year one is sixteen point six seven percent.

Pausa.

The net return for investors over the full five-year holding period is simply the same forty-two point three five percent already computed earlier,
because that reported fund return already reflected direct and indirect expenses.

Pausa.

The after-tax net return in year one is twelve percent.

That comes from taking the fifteen percent net return and reducing it by a twenty percent tax rate.

Pausa.

In year five,
the fund's nominal return is three percent.

After tax,
that becomes two point four percent.

Then inflation of two percent is removed.

Using the exact real-return adjustment,
one point zero two four divided by one point zero two,
minus one,
gives zero point three nine percent.

Pausa.

The curriculum makes one more subtle point here:

taxes are paid before adjusting for inflation.

That ordering matters.

Leveraged Return.

Leverage means creating exposure to asset returns that is larger than the amount of your own money committed.

The reading gives two broad paths.

One is derivatives,
such as futures,
where margin can be a small fraction of the notional position.

The other is borrowing money to purchase the asset directly.

Pausa.

If a futures position requires only ten percent margin,
then gains and losses on the investor's own capital are amplified roughly ten times relative to the underlying asset move.

Pausa.

With borrowed money,
the idea is similar,
but now the borrowing cost must be deducted.

The curriculum writes leveraged return as:

portfolio return,
plus the debt-to-equity ratio,
times the spread between portfolio return and borrowing cost.

Pausa.

If the portfolio return exceeds the borrowing cost,
leverage helps.

If the portfolio return falls below the borrowing cost,
leverage hurts.

Pausa.

The example uses a ten-million-euro portfolio position financed thirty percent with debt at five percent.

If the total portfolio return is eight percent,
the leveraged return on the equity capital becomes nine point two nine percent.

So leverage lifts the return because eight percent exceeds the five percent borrowing cost.

Example 15.

The final example in this episode ties several ideas together with historic geometric returns.

The exhibit gives:

- equities, eight point zero percent
- corporate bonds, six point five percent
- Treasury bills, two point five percent
- inflation, two point one percent

Pausa.

From those figures,
the real return for equities is five point eight percent.

The real return for corporate bonds is four point three percent.

Pausa.

The equity risk premium over Treasury bills is five point four percent.

And the corporate bond risk premium over Treasury bills is three point nine percent.

This is a satisfying place to land,
because it quietly reconnects us with episode one.

There we decomposed rates into inflation,
default,
liquidity,
and maturity effects.

Here we see that return measurement,
too,
can be decomposed depending on what question we are trying to answer.

## Closing

[Schermo: Session recap]

![Original PDF page 50 - practice problems begin here](./visuals/pdf-original/page-050-original.png)

Tonight we completed the return-measurement half of this first learning module.

We began with a short recap on arithmetic and geometric means,
then crossed into money-weighted return,
where investor cash flow timing changes the answer.

Pausa.

We then moved to time-weighted return,
where the goal is to remove the effect of external cash movements and isolate the investment path itself.

That is why time-weighted return is preferred for evaluating many portfolio managers.

Pausa.

We then annualized returns across mismatched horizons,
noted the danger of annualizing too mechanically,
and introduced continuously compounded returns,
where multiplication turns into addition.

Pausa.

And we closed with the practical world:

gross versus net,
pre-tax versus after-tax,
nominal versus real,
and leveraged return.

Pausa lunga.

The page on screen now marks the natural handoff into the practice problems.

That is a good stopping point for a narrative reading session.

The concepts are in place.

The formulas are in place.

And the next pages are there to test whether those ideas can be recalled under pressure.

Pausa.

For now,
this is the end of episode two.

Rest well.
Study well.
And I will see you in the next reading session.
`
  };
})();
