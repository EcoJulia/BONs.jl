import{_ as n,c as r,a5 as t,j as i,a as s,G as a,B as l,o as d}from"./chunks/framework.B9LFygIH.js";const w=JSON.parse('{"title":"BiodiversityObservationNetworks.jl","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}'),p={name:"index.md"},c={class:"jldocstring custom-block",open:""},h={class:"jldocstring custom-block",open:""},b={class:"jldocstring custom-block",open:""},g={class:"jldocstring custom-block",open:""},u={class:"jldocstring custom-block",open:""};function k(m,e,v,f,y,j){const o=l("Badge");return d(),r("div",null,[e[15]||(e[15]=t('<h1 id="biodiversityobservationnetworks-jl" tabindex="-1">BiodiversityObservationNetworks.jl <a class="header-anchor" href="#biodiversityobservationnetworks-jl" aria-label="Permalink to &quot;BiodiversityObservationNetworks.jl&quot;">​</a></h1><p>The purpose of this package is to provide a high-level, extensible, modular interface to the selection of sampling point for biodiversity processes in space. It is based around a collection of types representing point selection algorithms, used to select the most informative sampling points based on raster data. Specifically, many algorithms work from a layer indicating <em>entropy</em> of a model based prediction at each location.</p><div class="warning custom-block"><p class="custom-block-title">This package is in development</p><p>The <code>BiodiversityObservationNetworks.jl</code> package is currently under development. The API is not expected to change a lot, but it may change in order to facilitate the integration of new features.</p></div><h2 id="High-level-types" tabindex="-1">High-level types <a class="header-anchor" href="#High-level-types" aria-label="Permalink to &quot;High-level types {#High-level-types}&quot;">​</a></h2>',4)),i("details",c,[i("summary",null,[e[0]||(e[0]=i("a",{id:"BiodiversityObservationNetworks.BONSampler",href:"#BiodiversityObservationNetworks.BONSampler"},[i("span",{class:"jlbinding"},"BiodiversityObservationNetworks.BONSampler")],-1)),e[1]||(e[1]=s()),a(o,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[2]||(e[2]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">abstract type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BONSampler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>A <code>BONSampler</code> is any algorithm for proposing a set of sampling locations.</p><p><a href="https://github.com/PoisotLab/BiodiversityObservationNetworks.jl/blob/19c4f6a181a1f9d803b69817b874ad3bcac02597/src/types.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p>',3))]),e[16]||(e[16]=t('<div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>BONSeeder</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>BONRefiner</code>. Check Documenter&#39;s build log for details.</p></div><h2 id="Seeder-and-refiner-functions" tabindex="-1">Seeder and refiner functions <a class="header-anchor" href="#Seeder-and-refiner-functions" aria-label="Permalink to &quot;Seeder and refiner functions {#Seeder-and-refiner-functions}&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>seed</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>seed!</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>refine</code>. Check Documenter&#39;s build log for details.</p></div><div class="warning custom-block"><p class="custom-block-title">Missing docstring.</p><p>Missing docstring for <code>refine!</code>. Check Documenter&#39;s build log for details.</p></div><h2 id="Seeder-algorithms" tabindex="-1">Seeder algorithms <a class="header-anchor" href="#Seeder-algorithms" aria-label="Permalink to &quot;Seeder algorithms {#Seeder-algorithms}&quot;">​</a></h2>',8)),i("details",h,[i("summary",null,[e[3]||(e[3]=i("a",{id:"BiodiversityObservationNetworks.BalancedAcceptance",href:"#BiodiversityObservationNetworks.BalancedAcceptance"},[i("span",{class:"jlbinding"},"BiodiversityObservationNetworks.BalancedAcceptance")],-1)),e[4]||(e[4]=s()),a(o,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[5]||(e[5]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BalancedAcceptance</span></span></code></pre></div><p>A <code>BONSeeder</code> that uses Balanced-Acceptance Sampling (Van-dem-Bates et al. 2017 <a href="https://doi.org/10.1111/2041-210X.13003" target="_blank" rel="noreferrer">https://doi.org/10.1111/2041-210X.13003</a>)</p><p><a href="https://github.com/PoisotLab/BiodiversityObservationNetworks.jl/blob/19c4f6a181a1f9d803b69817b874ad3bcac02597/src/balancedacceptance.jl#L1-L6" target="_blank" rel="noreferrer">source</a></p>',3))]),e[17]||(e[17]=i("h2",{id:"Refiner-algorithms",tabindex:"-1"},[s("Refiner algorithms "),i("a",{class:"header-anchor",href:"#Refiner-algorithms","aria-label":'Permalink to "Refiner algorithms {#Refiner-algorithms}"'},"​")],-1)),e[18]||(e[18]=i("div",{class:"warning custom-block"},[i("p",{class:"custom-block-title"},"Missing docstring."),i("p",null,[s("Missing docstring for "),i("code",null,"AdaptiveSpatial"),s(". Check Documenter's build log for details.")])],-1)),i("details",b,[i("summary",null,[e[6]||(e[6]=i("a",{id:"BiodiversityObservationNetworks.Uniqueness",href:"#BiodiversityObservationNetworks.Uniqueness"},[i("span",{class:"jlbinding"},"BiodiversityObservationNetworks.Uniqueness")],-1)),e[7]||(e[7]=s()),a(o,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[8]||(e[8]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Uniqueness</span></span></code></pre></div><p>A <code>BONSampler</code></p><p><a href="https://github.com/PoisotLab/BiodiversityObservationNetworks.jl/blob/19c4f6a181a1f9d803b69817b874ad3bcac02597/src/uniqueness.jl#L1-L5" target="_blank" rel="noreferrer">source</a></p>',3))]),e[19]||(e[19]=i("h2",{id:"Helper-functions",tabindex:"-1"},[s("Helper functions "),i("a",{class:"header-anchor",href:"#Helper-functions","aria-label":'Permalink to "Helper functions {#Helper-functions}"'},"​")],-1)),e[20]||(e[20]=i("div",{class:"warning custom-block"},[i("p",{class:"custom-block-title"},"Missing docstring."),i("p",null,[s("Missing docstring for "),i("code",null,"squish"),s(". Check Documenter's build log for details.")])],-1)),i("details",g,[i("summary",null,[e[9]||(e[9]=i("a",{id:"BiodiversityObservationNetworks.entropize!",href:"#BiodiversityObservationNetworks.entropize!"},[i("span",{class:"jlbinding"},"BiodiversityObservationNetworks.entropize!")],-1)),e[10]||(e[10]=s()),a(o,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[11]||(e[11]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">entropize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(U</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Matrix{AbstractFloat}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, A</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Matrix{Number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>This function turns a matrix <code>A</code> (storing measurement values) into pixel-wise entropy values, stored in a matrix <code>U</code> (that is previously allocated).</p><p>Pixel-wise entropy is determined by measuring the empirical probability of randomly picking a value in the matrix that is either lower or higher than the pixel value. The entropy of both these probabilities are calculated using the -p×log(2,p) formula. The entropy of the pixel is the <em>sum</em> of the two entropies, so that it is close to 1 for values close to the median, and close to 0 for values close to the extreme of the distribution.</p><p><a href="https://github.com/PoisotLab/BiodiversityObservationNetworks.jl/blob/19c4f6a181a1f9d803b69817b874ad3bcac02597/src/entropize.jl#L1-L13" target="_blank" rel="noreferrer">source</a></p>',4))]),i("details",u,[i("summary",null,[e[12]||(e[12]=i("a",{id:"BiodiversityObservationNetworks.entropize",href:"#BiodiversityObservationNetworks.entropize"},[i("span",{class:"jlbinding"},"BiodiversityObservationNetworks.entropize")],-1)),e[13]||(e[13]=s()),a(o,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[14]||(e[14]=t('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">entropize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(A</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Matrix{Number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Allocation version of <code>entropize!</code>.</p><p><a href="https://github.com/PoisotLab/BiodiversityObservationNetworks.jl/blob/19c4f6a181a1f9d803b69817b874ad3bcac02597/src/entropize.jl#L30-L34" target="_blank" rel="noreferrer">source</a></p>',3))])])}const N=n(p,[["render",k]]);export{w as __pageData,N as default};
