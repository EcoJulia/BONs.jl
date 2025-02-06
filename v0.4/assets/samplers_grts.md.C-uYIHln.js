import{_ as n,C as l,c as p,o as r,j as i,ai as a,a as e,G as d}from"./chunks/framework.BuvjEQjq.js";const o="/BiodiversityObservationNetworks.jl/v0.4/assets/slxodnj.CaDtZK0q.png",b=JSON.parse('{"title":"Generalized Random Tessellated Stratified Sampling","description":"","frontmatter":{},"headers":[],"relativePath":"samplers/grts.md","filePath":"samplers/grts.md","lastUpdated":null}'),h={name:"samplers/grts.md"},k={class:"jldocstring custom-block",open:""};function g(c,s,E,y,u,m){const t=l("Badge");return r(),p("div",null,[s[3]||(s[3]=i("h1",{id:"Generalized-Random-Tessellated-Stratified-Sampling",tabindex:"-1"},[e("Generalized Random Tessellated Stratified Sampling "),i("a",{class:"header-anchor",href:"#Generalized-Random-Tessellated-Stratified-Sampling","aria-label":'Permalink to "Generalized Random Tessellated Stratified Sampling {#Generalized-Random-Tessellated-Stratified-Sampling}"'},"​")],-1)),i("details",k,[i("summary",null,[s[0]||(s[0]=i("a",{id:"BiodiversityObservationNetworks.GeneralizedRandomTessellatedStratified-samplers-grts",href:"#BiodiversityObservationNetworks.GeneralizedRandomTessellatedStratified-samplers-grts"},[i("span",{class:"jlbinding"},"BiodiversityObservationNetworks.GeneralizedRandomTessellatedStratified")],-1)),s[1]||(s[1]=e()),d(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),s[2]||(s[2]=a('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GeneralizedRandomTessellatedStratified</span></span></code></pre></div><p><code>GeneralizedRandomTessellatedStratified</code> is a type of <a href="/BiodiversityObservationNetworks.jl/v0.4/api#BiodiversityObservationNetworks.BONSampler"><code>BONSampler</code></a> for generating <a href="/BiodiversityObservationNetworks.jl/v0.4/api#BiodiversityObservationNetworks.BiodiversityObservationNetwork"><code>BiodiversityObservationNetwork</code></a>s with spatial spreading.</p><p><em>Arguments</em>:</p><ul><li><p><code>number_of_nodes</code>: the number of sites to select</p></li><li><p><code>grid_size</code>: if being used on a polygon, the dimensions of the grid used to cover the extent. GRTS sampling uses discrete Cartesian indices</p></li></ul><p>@Olsen</p><p>GRTS represents each cell of a rasterized version of the sampling domain using an address, where the address of each cell is represented as a <code>D</code>-digit base-4 number.</p><p>The value of <code>D</code> depends on the size of the raster. GRTS works by recursively splitting the rasterized domain into quadrants, and those quadrants into further quadrants, until a single pixel is reached. At each step, each quadrant is randomly labeled with a number 1, 2, 3, or 4 (without replacement, so all values are used).</p><p>The addresses are then sorted numerically, and the <code>number_of_nodes</code> smallest values are chosen.</p><p><a href="https://github.com/PoisotLab/BiodiversityObservationNetworks.jl/blob/8ded99198cc962ae028413bedd1566f54cd83100/src/samplers/grts.jl#L1-L28" target="_blank" rel="noreferrer">source</a></p>',9))]),s[4]||(s[4]=a(`<h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><h3 id="Using-a-polygon" tabindex="-1">Using a polygon <a class="header-anchor" href="#Using-a-polygon" aria-label="Permalink to &quot;Using a polygon {#Using-a-polygon}&quot;">​</a></h3><p>First, load the packages we will use for this example</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BiodiversityObservationNetworks</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GeoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpeciesDistributionToolkit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SDT</span></span></code></pre></div><p>now sample a <a href="/BiodiversityObservationNetworks.jl/v0.4/api#BiodiversityObservationNetworks.BiodiversityObservationNetwork"><code>BiodiversityObservationNetwork</code></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num_nodes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">corsica </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SDT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gadm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;FRA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Corse&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GeneralizedRandomTessellatedStratified</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num_nodes), corsica)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BiodiversityObservationNetwork with 50 nodes</span></span></code></pre></div><p>and plot</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bonplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], bon, corsica, axistype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GeoAxis)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><p><img src="`+o+'" alt=""></p>',10))])}const f=n(h,[["render",g]]);export{b as __pageData,f as default};
