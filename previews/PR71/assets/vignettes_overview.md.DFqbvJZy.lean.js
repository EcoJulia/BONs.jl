import{_ as s,c as a,a5 as i,o as t}from"./chunks/framework.B9LFygIH.js";const n="/BiodiversityObservationNetworks.jl/previews/PR71/assets/dmwraow.CxjGy8Tx.png",u=JSON.parse('{"title":"An introduction to BiodiversityObservationNetworks","description":"","frontmatter":{},"headers":[],"relativePath":"vignettes/overview.md","filePath":"vignettes/overview.md","lastUpdated":null}'),o={name:"vignettes/overview.md"};function p(l,e,r,d,h,c){return t(),a("div",null,e[0]||(e[0]=[i(`<h1 id="An-introduction-to-BiodiversityObservationNetworks" tabindex="-1">An introduction to BiodiversityObservationNetworks <a class="header-anchor" href="#An-introduction-to-BiodiversityObservationNetworks" aria-label="Permalink to &quot;An introduction to BiodiversityObservationNetworks {#An-introduction-to-BiodiversityObservationNetworks}&quot;">​</a></h1><p>In this vignette, we will walk through the basic functionalities of the package, by generating a random uncertainty matrix, and then using a <em>seeder</em> and a <em>refiner</em> to decide which locations should be sampled in order to gain more insights about the process generating this entropy.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BiodiversityObservationNetworks</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NeutralLandscapes</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span></code></pre></div><p>In order to simplify the process, we will use the <em>NeutralLandscapes</em> package to generate a 100×100 pixels landscape, where each cell represents the entropy (or information content) in a unit we can sample:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">U </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MidpointDisplacement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">heatmap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(U)</span></span></code></pre></div><p><img src="`+n+`" alt=""></p><p>In practice, this uncertainty matrix is likely to be derived from an application of the hyper-parameters optimization step, which is detailed in other vignettes.</p><p>The first step of defining a series of locations to sample is to use a <code>BONSeeder</code>, which will generate a number of relatively coarse proposals that cover the entire landscape, and have a balanced distribution in space. We do so using the <code>BalancedAcceptance</code> sampler, which can be tweaked to capture more (or less) uncertainty. To start with, we will extract 200 candidate points, <em>i.e.</em> 200 possible locations which will then be refined.</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line highlighted"><span>candidates = seed(BalancedAcceptance(; numsites = 200));</span></span></code></pre></div><p>We can have a look at the first five points:</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line highlighted"><span>candidates[1:5]</span></span></code></pre></div><p>The positions of locations to sample are given as a vector of <code>CartesianIndex</code>, which are coordinates in the uncertainty matrix. Once we have generated a candidate proposal, we can further refine it using a <code>BONRefiner</code> – in this case, <code>AdaptiveSpatial</code>, which performs adaptive spatial sampling (maximizing the distribution of entropy while minimizing spatial auto-correlation).</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line highlighted"><span>locations = refine(candidates, AdaptiveSpatial(; numsites = 50, uncertainty=U))</span></span>
<span class="line"><span>locations[1:5]</span></span></code></pre></div><p>The reason we start from a candidate set of points is that some algorithms struggle with full landscapes, and work much better with a sub-sample of them. There is no hard rule (or no heuristic) to get a sense for how many points should be generated at the seeding step, and so experimentation is a must!</p><p>The previous code examples used a version of the <code>seed</code> and <code>refine</code> functions that is very useful if you want to change arguments between steps, or examine the content of the candidate pool of points. In addition to this syntax, both functions have a curried version that allows chaining them together using pipes (<code>|&gt;</code>):</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line highlighted"><span>locations =</span></span>
<span class="line"><span>    seed(BalancedAcceptance(; numsites = 200)) |&gt;</span></span>
<span class="line"><span>    refine(AdaptiveSpatial(; numsites = 50, uncertainty=U))</span></span></code></pre></div><p>This works because <code>seed</code> and <code>refine</code> have curried versions that can be used directly in a pipeline. Proposed sampling locations can then be overlayed onto the original uncertainty matrix:</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line highlighted"><span>plt = heatmap(U)</span></span>
<span class="line"><span>scatter!(plt, [x[1] for x in locations], [x[2] for x in locations])</span></span>
<span class="line"><span>current_figure()</span></span></code></pre></div>`,18)]))}const k=s(o,[["render",p]]);export{u as __pageData,k as default};
