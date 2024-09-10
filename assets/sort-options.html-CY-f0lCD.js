import{_ as s,o as a,c as t,d as e}from"./app-CbJnpAZk.js";const l={};function p(i,n){return a(),t("div",null,n[0]||(n[0]=[e(`<h1 id="sort-options" tabindex="-1"><a class="header-anchor" href="#sort-options"><span>Sort Options</span></a></h1><p>Set of options related to table sorting</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span></span>
<span class="line">  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">:sort-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{</span>
<span class="line">    enabled: true,</span>
<span class="line">    initialSortBy: {field: &#39;name&#39;, type: &#39;asc&#39;}</span>
<span class="line">  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled"><span>enabled</span></a></h2><p>type: <code>Boolean (default: true)</code></p><p>Enable/disable sorting on table as a whole.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span></span>
<span class="line">  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">:sort-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{</span>
<span class="line">    enabled: true,</span>
<span class="line">  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="initialsortby" tabindex="-1"><a class="header-anchor" href="#initialsortby"><span>initialSortBy</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Update</p><p><code>initialSortBy</code> now allows for sort by multiple columns</p></div><p>type: <code>Object</code> or <code>Array</code></p><p>Allows specifying a default sort for the table on wakeup. Both <strong>field</strong> and <strong>type</strong> values are required.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span></span>
<span class="line">  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">:sort-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{</span>
<span class="line">    enabled: true,</span>
<span class="line">    initialSortBy: {field: &#39;name&#39;, type: &#39;asc&#39;}</span>
<span class="line">  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multiplecolumns" tabindex="-1"><a class="header-anchor" href="#multiplecolumns"><span>multipleColumns</span></a></h2><p>type: <code>Boolean (default: true)</code></p><p>Enable/disable multiple column sort. Users can shift-click on multiple columns to sort by multiple columns. The first column in the array gets primary sort.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span></span>
<span class="line">  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">:sort-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{</span>
<span class="line">    enabled: true,</span>
<span class="line">    multipleColumns: true,</span>
<span class="line">    initialSortBy: [</span>
<span class="line">      {field: &#39;name&#39;, type: &#39;asc&#39;},</span>
<span class="line">      {field: &#39;age&#39;, type: &#39;desc&#39;}</span>
<span class="line">    ],</span>
<span class="line">  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const c=s(l,[["render",p],["__file","sort-options.html.vue"]]),u=JSON.parse('{"path":"/guide/configuration/sort-options.html","title":"Sort Options","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"enabled","slug":"enabled","link":"#enabled","children":[]},{"level":2,"title":"initialSortBy","slug":"initialsortby","link":"#initialsortby","children":[]},{"level":2,"title":"multipleColumns","slug":"multiplecolumns","link":"#multiplecolumns","children":[]}],"git":{"updatedTime":1614651663000,"contributors":[{"name":"Akshay Anand","email":"aks9800@gmail.com","commits":4}]},"filePathRelative":"guide/configuration/sort-options.md"}');export{c as comp,u as data};
