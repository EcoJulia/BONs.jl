import{_ as i,c as e,a5 as t,o as a}from"./chunks/framework.Dt1IeXwB.js";const n="/BiodiversityObservationNetworks.jl/dev/assets/xnftxnk.S4jp7vze.png",g=JSON.parse('{"title":"Getting the entropy matrix","description":"","frontmatter":{},"headers":[],"relativePath":"vignettes/entropize.md","filePath":"vignettes/entropize.md","lastUpdated":null}'),p={name:"vignettes/entropize.md"};function l(o,s,r,h,d,c){return a(),e("div",null,s[0]||(s[0]=[t(`<h1 id="Getting-the-entropy-matrix" tabindex="-1">Getting the entropy matrix <a class="header-anchor" href="#Getting-the-entropy-matrix" aria-label="Permalink to &quot;Getting the entropy matrix {#Getting-the-entropy-matrix}&quot;">​</a></h1><p>For some applications, we want to place points to capture the maximum amount of information, which is to say that we want to sample a balance of <em>entropy</em> values, as opposed to <em>absolute</em> values. In this vignette, we will walk through an example using the <code>entropize</code> function to convert raw data to entropy values.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BiodiversityObservationNetworks</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NeutralLandscapes</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Entropy is problem-specific</p><p>The solution presented in this vignette is a least-assumption solution based on the empirical values given in a matrix of measurements. In a lot of situations, this is not the entropy that you want. For example, if your pixels are storing probabilities of Bernoulli events, you can directly use the entropy of the events in the entropy matrix.</p></div><p>We start by generating a random matrix of measurements:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">measurements </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MidpointDisplacement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">heatmap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(measurements)</span></span></code></pre></div><p><img src="`+n+`" alt=""></p><p>Using the <code>entropize</code> function will convert these values into entropy at the pixel scale:</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line highlighted"><span>U = entropize(measurements)</span></span>
<span class="line"><span>locations =</span></span>
<span class="line"><span>    seed(BalancedAcceptance(; numsites = 100, uncertainty=U))</span></span></code></pre></div>`,9)]))}const u=i(p,[["render",l]]);export{g as __pageData,u as default};
