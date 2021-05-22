import React from 'react';
import '../assets/css/notebook1.css';
import parse from 'html-react-parser'


const AlgorithmSIR = () => {


    const elem = parse(
        `
        <div class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">
    <div class="jp-Cell-inputWrapper">
        <div class="jp-InputPrompt jp-InputArea-prompt"></div>
        <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
            <h1 id="M2---SIR-based">M2 - SIR based<a class="anchor-link" href="#M2---SIR-based">&#182;</a></h1>
        </div>
    </div>
    <div class="jp-Cell-inputWrapper">
        <div class="jp-InputPrompt jp-InputArea-prompt"></div>
        <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
            <p>
                On top of solving the ODE parameters, data fitting can also be done by machine learning. An LSTM model, that looks back in time and is able to remember values from the past, can be used to learn the relationship of the model
                parameter values and the NPI-scores. Here, an assumption is made that there will be a delay between the first day of implementing an NPI and the day that actual effect is seen in the number of confirmed cases. This delay is
                computed by <strong>Change Point Analysis</strong>. 
            </p>
            <p>
            Compared to M1, the approach of M2 is relatively more simple. Low computational power of M2 enabled the analysis of M2 combined with three SIR model variants. Therefore, M2 was trained on the SIR, SEIR and SIRD model separately. The new equations of the SIR model become:
            </p>
        </div>
    </div>

<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>To evaluate the outcome of an intervention regarding the number of confirmed cases, a term is added to the model that includes NPI strength. This term is represented by a function $NPI(t)$ and is added to the second SIR equation and describes the strength of a single intervention. The optimal value for the function $NPI(t)$ is approximated using an LSTM model.</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>
\\begin{eqnarray}
\\frac{dS}{dT} &amp; = &amp; - \\frac{\\beta (t) }{N} \\ S(t) \\  I(t)   \\
\\end{eqnarray}
</p>
<p>
\\begin{eqnarray}
\\frac{dI}{dT} &amp; = &amp; \\frac{\\beta(t) }{N} \\ S(t)  \\ I(t)  - \\gamma \\ I(t)  - \\mathbf{[NPI(t) \\ I]}
\\end{eqnarray}
</p>
<p>
\\begin{eqnarray}
\\frac{dR}{dT} &amp; = &amp; \\gamma \\ I(t) 
\\end{eqnarray}
</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>For the SEIR model, the same technique was applied, resulting in the new equations:</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>
\\begin{eqnarray}
\\frac{dS}{dT} &amp; = &amp; - \\frac{\\beta (t) }{N} \\ S(t) \\ I(t)  \\,
\\end{eqnarray}
</p>
<p>
\\begin{eqnarray}
\\frac{dE}{dT} &amp; = &amp; \\frac{\\beta(t) }{N} \\ S(t) \\ I(t)  - \\delta \\ E(t)  \\,
\\end{eqnarray}
</p>
<p>
\\begin{eqnarray}
\\frac{dI}{dT} &amp; = &amp; \\delta E(t)  - \\gamma \\ I(t)   - \\mathbf{[NPI(t) \\ I]}\\,
\\end{eqnarray}
</p>
<p>
\\begin{eqnarray}
\\frac{dR}{dT} &amp; = &amp; \\gamma \\ I(t) 
\\end{eqnarray}
</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The equations for the SIRD model become:</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>
\\begin{eqnarray}
\\frac{dS}{dT} &amp; = &amp; - \\frac{\\beta (t) }{N} \\ S(t) \\ I(t) 
\\end{eqnarray}
</p>

<p>
\\begin{eqnarray}
\\frac{dI}{dT} &amp; = &amp; \\frac{\\beta(t) }{N} \\ S(t) \\ I(t)  - (\\gamma + \\alpha)  \\ I(t)  - \\mathbf{[NPI(t) \\ I]} 
\\end{eqnarray}
</p>
<p>
\\begin{eqnarray}
\\frac{dR}{dT} &amp; = &amp; \\gamma \\ I(t) \\
\\end{eqnarray}
</p>
<p>
\\begin{eqnarray}
\\frac{dD}{dT} &amp; = &amp; \\alpha \\ I(t) 
\\end{eqnarray}
</p>


</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span> 
</pre></div>

     </div>
</div>
</div>
</div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[6]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="kn">import</span> <span class="nn">os</span>
<span class="n">os</span><span class="o">.</span><span class="n">chdir</span><span class="p">(</span><span class="s2">&quot;../LSTM&quot;</span><span class="p">)</span>
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[7]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="kn">from</span> <span class="nn">core.nn.LSTM_M2</span> <span class="kn">import</span> <span class="n">LSTM_M2</span>
<span class="o">%</span><span class="k">load_ext</span> autoreload
<span class="o">%</span><span class="k">autoreload</span> 2

<span class="kn">from</span> <span class="nn">SIR_ODE</span> <span class="kn">import</span> <span class="n">SIR</span>
<span class="kn">import</span> <span class="nn">math</span>
<span class="kn">import</span> <span class="nn">pickle</span>
<span class="kn">import</span> <span class="nn">datetime</span>
<span class="kn">from</span> <span class="nn">numpy</span> <span class="kn">import</span> <span class="n">array</span>
<span class="kn">import</span> <span class="nn">matplotlib.pylab</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">covsirphy</span> <span class="k">as</span> <span class="nn">cs</span>
<span class="kn">import</span> <span class="nn">requests</span><span class="o">,</span> <span class="nn">io</span><span class="o">,</span> <span class="nn">json</span><span class="o">,</span> <span class="nn">urllib</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">plotly.express</span> <span class="k">as</span> <span class="nn">px</span>
<span class="kn">import</span> <span class="nn">plotly.graph_objects</span> <span class="k">as</span> <span class="nn">go</span>
<span class="kn">from</span> <span class="nn">itertools</span> <span class="kn">import</span> <span class="n">cycle</span>
<span class="kn">import</span> <span class="nn">os.path</span>
<span class="kn">import</span> <span class="nn">plotly.graph_objects</span> <span class="k">as</span> <span class="nn">go</span>
<span class="kn">from</span> <span class="nn">plotly.subplots</span> <span class="kn">import</span> <span class="n">make_subplots</span>
<span class="kn">import</span> <span class="nn">plotly.express</span> <span class="k">as</span> <span class="nn">px</span>
<span class="kn">import</span> <span class="nn">math</span>
<span class="kn">from</span> <span class="nn">sklearn.metrics</span> <span class="kn">import</span> <span class="n">mean_squared_error</span>
<span class="kn">from</span> <span class="nn">itertools</span> <span class="kn">import</span> <span class="n">cycle</span>

<span class="kn">import</span> <span class="nn">seaborn</span> <span class="k">as</span> <span class="nn">sns</span>
<span class="n">sns</span><span class="o">.</span><span class="n">set</span><span class="p">()</span>
<span class="o">%</span><span class="k">matplotlib</span> inline
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell-inputWrapper">
        <div class="jp-InputPrompt jp-InputArea-prompt"></div>
        <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
            <h3 id="Prepare-datasets">Prepare datasets<a class="anchor-link" href="#Prepare-datasets">&#182;</a></h3>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[8]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="c1"># Download datasets</span>
<span class="n">data_loader</span> <span class="o">=</span> <span class="n">cs</span><span class="o">.</span><span class="n">DataLoader</span><span class="p">(</span><span class="s2">&quot;input&quot;</span><span class="p">)</span>
<span class="n">jhu_data</span> <span class="o">=</span> <span class="n">data_loader</span><span class="o">.</span><span class="n">jhu</span><span class="p">()</span>
<span class="n">population_data</span> <span class="o">=</span> <span class="n">data_loader</span><span class="o">.</span><span class="n">population</span><span class="p">()</span>
<span class="n">population_df</span> <span class="o">=</span> <span class="n">population_data</span><span class="o">.</span><span class="n">cleaned</span><span class="p">()</span>
<span class="n">oxcgrt_data</span> <span class="o">=</span> <span class="n">data_loader</span><span class="o">.</span><span class="n">oxcgrt</span><span class="p">()</span>
<span class="n">TARGET_NPI</span> <span class="o">=</span> <span class="s2">&quot;Stringency_index&quot;</span>
<span class="n">target_column</span> <span class="o">=</span> <span class="s2">&quot;Infected&quot;</span>
<span class="n">df</span> <span class="o">=</span> <span class="n">jhu_data</span><span class="o">.</span><span class="n">cleaned</span><span class="p">()</span>

<span class="c1"># Save copy</span>
<span class="n">old_df</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">copy</span><span class="p">()</span>
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="jp-Cell-outputWrapper">
            <div class="jp-OutputArea jp-Cell-outputArea">
                <div class="jp-OutputArea-child">
                    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>

                    <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
                        <pre>
Retrieving datasets from COVID-19 Data Hub: https://covid19datahub.io/

Please set verbose=2 to see the detailed citation list.


Retrieving COVID-19 dataset in Japan from https://github.com/lisphilar/covid19-sir/data/japan

                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[9]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="n">NPIS</span> <span class="o">=</span> <span class="p">[</span> <span class="s1">&#39;Stringency_index&#39;</span><span class="p">,</span> <span class="s1">&#39;School_closing&#39;</span><span class="p">,</span> <span class="s1">&#39;Workplace_closing&#39;</span><span class="p">,</span>
       <span class="s1">&#39;Gatherings_restrictions&#39;</span><span class="p">,</span> <span class="s1">&#39;Stay_home_restrictions&#39;</span><span class="p">,</span>
       <span class="s1">&#39;International_movement_restrictions&#39;</span><span class="p">,</span> <span class="s1">&#39;Testing_policy&#39;</span><span class="p">]</span>
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell-inputWrapper">
        <div class="jp-InputPrompt jp-InputArea-prompt"></div>
        <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
            <h3 id="Select-Country">Select Country<a class="anchor-link" href="#Select-Country">&#182;</a></h3>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[13]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="n">COUNTRY</span> <span class="o">=</span> <span class="s2">&quot;Netherlands&quot;</span>
<span class="n">N</span> <span class="o">=</span> <span class="n">population_df</span><span class="p">[</span><span class="n">population_df</span><span class="p">[</span><span class="s2">&quot;Country&quot;</span><span class="p">]</span> <span class="o">==</span> <span class="n">COUNTRY</span><span class="p">][</span><span class="s2">&quot;Population&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">values</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Population:&quot;</span><span class="p">,</span> <span class="n">N</span><span class="p">)</span>
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="jp-Cell-outputWrapper">
            <div class="jp-OutputArea jp-Cell-outputArea">
                <div class="jp-OutputArea-child">
                    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>

                    <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
                        <pre>
Population: 17231624

                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[7]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="k">def</span> <span class="nf">preprocess_data</span><span class="p">(</span><span class="n">COUNTRY</span><span class="p">):</span>
    <span class="n">df</span> <span class="o">=</span> <span class="n">jhu_data</span><span class="o">.</span><span class="n">cleaned</span><span class="p">()</span>
    <span class="n">df</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="p">[</span><span class="s2">&quot;Country&quot;</span><span class="p">]</span> <span class="o">==</span> <span class="n">COUNTRY</span><span class="p">]</span>
    <span class="n">old_df</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">copy</span><span class="p">()</span>
    <span class="n">df</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="p">[</span><span class="s2">&quot;Province&quot;</span><span class="p">]</span> <span class="o">==</span> <span class="s2">&quot;-&quot;</span><span class="p">]</span>
    <span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="o">.</span><span class="n">columns</span><span class="p">[</span><span class="o">-</span><span class="mi">4</span><span class="p">:]]</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="o">.</span><span class="n">columns</span><span class="p">[</span><span class="o">-</span><span class="mi">4</span><span class="p">:]]</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="mi">7</span><span class="p">)</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
    <span class="n">df</span><span class="p">[</span><span class="s2">&quot;New Confirmed&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">Confirmed</span><span class="o">.</span><span class="n">diff</span><span class="p">()</span>
    
    <span class="n">SIR_LSTM</span> <span class="o">=</span> <span class="n">LSTM_M2</span><span class="p">(</span><span class="n">COUNTRY</span><span class="p">)</span>
    <span class="n">DELAY_START</span><span class="p">,</span> <span class="n">df_params</span><span class="p">,</span> <span class="n">NPI_dates</span><span class="p">,</span> <span class="n">days_delay</span> <span class="o">=</span> <span class="n">SIR_LSTM</span><span class="o">.</span><span class="n">estimate_country</span><span class="p">(</span><span class="n">jhu_data</span><span class="p">,</span> 
                                                                              <span class="n">population_data</span><span class="p">,</span> 
                                                                              <span class="n">oxcgrt_data</span><span class="p">,</span> 
                                                                              <span class="n">TARGET_NPI</span><span class="p">)</span>

    <span class="n">train</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="p">[</span><span class="s2">&quot;Date&quot;</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="n">DELAY_START</span><span class="o">.</span><span class="n">strftime</span><span class="p">(</span><span class="s2">&quot;%Y-%m-</span><span class="si">%d</span><span class="s2">&quot;</span><span class="p">)]</span>
    <span class="n">test</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="p">[</span><span class="s2">&quot;Date&quot;</span><span class="p">]</span> <span class="o">&gt;=</span> <span class="n">DELAY_START</span><span class="o">.</span><span class="n">strftime</span><span class="p">(</span><span class="s2">&quot;%Y-%m-</span><span class="si">%d</span><span class="s2">&quot;</span><span class="p">)]</span>
    
    <span class="k">return</span> <span class="n">df</span><span class="p">,</span> <span class="n">train</span><span class="p">,</span> <span class="n">test</span>
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell-inputWrapper">
        <div class="jp-InputPrompt jp-InputArea-prompt"></div>
        <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
            <h3 id="Compute-associated-SIR-model-parameters-for-a-given-Non-pharmaceutical-Intervention-(NPI).">
                Compute associated SIR model parameters for a given Non-pharmaceutical Intervention (NPI).<a class="anchor-link" href="#Compute-associated-SIR-model-parameters-for-a-given-Non-pharmaceutical-Intervention-(NPI).">&#182;</a>
            </h3>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[16]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="k">def</span> <span class="nf">calc_param</span><span class="p">(</span><span class="n">df</span><span class="p">,</span> <span class="n">dates</span><span class="p">):</span>
    <span class="sd">&quot;&quot;&quot;</span>
<span class="sd">    Compute model parameters associated with NPIs, implemented</span>
<span class="sd">    on a given date range. </span>
<span class="sd">    </span>
<span class="sd">        df: input dataframe with total model parameters over </span>
<span class="sd">        time for a given country.</span>
<span class="sd">        dates: a list of dates (in timestamp format) that </span>
<span class="sd">        cover the dates of implementing an NPI.</span>
<span class="sd">    &quot;&quot;&quot;</span>
    <span class="n">total_params</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;theta&quot;</span><span class="p">,</span> <span class="s2">&quot;kappa&quot;</span><span class="p">,</span> <span class="s2">&quot;rho&quot;</span><span class="p">,</span> <span class="s2">&quot;sigma&quot;</span><span class="p">]</span>
    <span class="n">calc_params_df</span> <span class="o">=</span> <span class="p">{}</span>
    <span class="k">for</span> <span class="n">param</span> <span class="ow">in</span> <span class="n">total_params</span><span class="p">:</span>
        <span class="n">values</span> <span class="o">=</span> <span class="p">[]</span>
        <span class="k">for</span> <span class="n">date</span> <span class="ow">in</span> <span class="n">df</span><span class="p">[</span><span class="s2">&quot;Date&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">values</span><span class="p">:</span>
            <span class="k">if</span> <span class="n">date</span> <span class="ow">in</span> <span class="n">dates</span><span class="o">.</span><span class="n">values</span><span class="p">:</span>
                <span class="n">values</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="p">[</span><span class="s1">&#39;Date&#39;</span><span class="p">]</span> <span class="o">==</span> <span class="n">date</span><span class="p">][</span><span class="n">param</span><span class="p">]))</span>
        <span class="n">calc_params_df</span><span class="p">[</span><span class="n">param</span><span class="p">]</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">values</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">calc_params_df</span>
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[17]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="k">def</span> <span class="nf">get_res_df</span><span class="p">(</span><span class="n">NPI</span><span class="p">,</span> <span class="n">selection</span><span class="p">,</span> <span class="n">plot</span><span class="o">=</span><span class="kc">True</span><span class="p">):</span>
    <span class="n">params_total</span> <span class="o">=</span> <span class="p">{}</span>
    <span class="n">sir_params_total</span> <span class="o">=</span> <span class="p">{}</span>
    <span class="k">for</span> <span class="n">p</span> <span class="ow">in</span> <span class="n">NPI_dates</span><span class="p">:</span>
        <span class="n">res</span> <span class="o">=</span> <span class="n">calc_param</span><span class="p">(</span><span class="n">df_params</span><span class="p">,</span> <span class="n">pd</span><span class="o">.</span><span class="n">Series</span><span class="p">(</span><span class="n">NPI_dates</span><span class="p">[</span><span class="n">p</span><span class="p">]))</span>
        
        <span class="c1"># Check if parameter exists</span>
        <span class="k">if</span> <span class="ow">not</span> <span class="n">math</span><span class="o">.</span><span class="n">isnan</span><span class="p">(</span><span class="n">res</span><span class="p">[</span><span class="s2">&quot;kappa&quot;</span><span class="p">]):</span>
            <span class="n">params_total</span><span class="p">[</span><span class="n">p</span><span class="p">]</span> <span class="o">=</span> <span class="n">res</span>
            <span class="n">sir</span> <span class="o">=</span> <span class="n">SIR</span><span class="p">(</span><span class="n">N</span><span class="o">=</span><span class="n">N</span><span class="p">,</span> <span class="n">I0</span><span class="o">=</span><span class="n">selection</span><span class="p">[</span><span class="n">target_column</span><span class="p">],</span> <span class="n">R0</span><span class="o">=</span><span class="n">selection</span><span class="p">[</span><span class="s2">&quot;Recovered&quot;</span><span class="p">],</span> 
                      <span class="n">beta</span><span class="o">=</span><span class="n">res</span><span class="p">[</span><span class="s2">&quot;rho&quot;</span><span class="p">],</span> <span class="n">gamma</span><span class="o">=</span><span class="n">res</span><span class="p">[</span><span class="s2">&quot;theta&quot;</span><span class="p">],</span> <span class="n">rho</span><span class="o">=</span><span class="n">res</span><span class="p">[</span><span class="s2">&quot;rho&quot;</span><span class="p">],</span> <span class="n">sigma</span><span class="o">=</span><span class="n">res</span><span class="p">[</span><span class="s2">&quot;sigma&quot;</span><span class="p">],</span>
                      <span class="n">days</span><span class="o">=</span><span class="nb">len</span><span class="p">(</span><span class="n">test</span><span class="p">))</span>
            <span class="n">SIR_results</span> <span class="o">=</span> <span class="n">sir</span><span class="o">.</span><span class="n">simulate</span><span class="p">(</span><span class="n">target</span><span class="o">=</span><span class="s2">&quot;Infected&quot;</span><span class="p">,</span> <span class="n">plot</span><span class="o">=</span><span class="kc">False</span><span class="p">)</span>
            <span class="n">sir_params_total</span><span class="p">[</span><span class="n">p</span><span class="p">]</span> <span class="o">=</span> <span class="n">SIR_results</span>
    <span class="n">test</span><span class="p">[</span><span class="s2">&quot;SIR Infected&quot;</span> <span class="o">+</span> <span class="n">NPI</span><span class="p">]</span> <span class="o">=</span> <span class="n">SIR_results</span><span class="p">[</span><span class="s2">&quot;I&quot;</span><span class="p">]</span>

    <span class="n">SIR_LSTM</span> <span class="o">=</span> <span class="n">LSTM_M2</span><span class="p">(</span><span class="n">COUNTRY</span><span class="p">,</span> <span class="n">DELAY_START</span><span class="p">,</span> <span class="n">FUTURE_DAYS</span><span class="o">=</span><span class="nb">len</span><span class="p">(</span><span class="n">test</span><span class="p">))</span>
    <span class="n">SIR_LSTM</span><span class="o">.</span><span class="n">input_data</span><span class="p">(</span><span class="n">df</span><span class="p">)</span>
    <span class="n">results</span> <span class="o">=</span> <span class="n">SIR_LSTM</span><span class="o">.</span><span class="n">simulate</span><span class="p">();</span>
    
    <span class="n">test</span><span class="p">[</span><span class="s2">&quot;LSTM&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">results</span><span class="p">[</span><span class="s2">&quot;pred&quot;</span><span class="p">]</span>
    <span class="n">test</span><span class="p">[</span><span class="s2">&quot;M2&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">SIR_LSTM</span><span class="o">.</span><span class="n">update_predictions</span><span class="p">(</span><span class="n">test</span><span class="p">[</span><span class="s2">&quot;SIR Infected&quot;</span> <span class="o">+</span> <span class="n">NPI</span><span class="p">],</span> <span class="n">tau</span><span class="o">=</span><span class="n">days_delay</span><span class="p">)</span>
    <span class="n">subset_old_df</span> <span class="o">=</span> <span class="n">old_df</span><span class="p">[</span><span class="n">old_df</span><span class="p">[</span><span class="s2">&quot;Country&quot;</span><span class="p">]</span> <span class="o">==</span> <span class="n">COUNTRY</span><span class="p">]</span>
    <span class="n">test</span><span class="p">[</span><span class="s2">&quot;Observed&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">subset_old_df</span><span class="p">[</span><span class="n">subset_old_df</span><span class="p">[</span><span class="s2">&quot;Date&quot;</span><span class="p">]</span> <span class="o">&gt;=</span> <span class="n">DELAY_START</span><span class="o">.</span><span class="n">strftime</span><span class="p">(</span><span class="s2">&quot;%Y-%m-</span><span class="si">%d</span><span class="s2">&quot;</span><span class="p">)][</span><span class="s2">&quot;Infected&quot;</span><span class="p">]</span>
    
    <span class="k">if</span> <span class="n">plot</span><span class="p">:</span>
        <span class="n">train_copy</span> <span class="o">=</span> <span class="n">train</span><span class="p">[</span><span class="n">train</span><span class="p">[</span><span class="s2">&quot;Date&quot;</span><span class="p">]</span> <span class="o">&gt;=</span> <span class="n">pd</span><span class="o">.</span><span class="n">to_datetime</span><span class="p">(</span><span class="s1">&#39;2020-08-01&#39;</span><span class="p">)]</span><span class="o">.</span><span class="n">copy</span><span class="p">()</span>
        <span class="n">ax</span> <span class="o">=</span> <span class="n">train_copy</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="s2">&quot;Date&quot;</span><span class="p">,</span> <span class="n">y</span><span class="o">=</span><span class="s2">&quot;Infected&quot;</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s2">&quot;Train&quot;</span><span class="p">);</span>
        <span class="n">test</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="s2">&quot;Date&quot;</span><span class="p">,</span> <span class="n">y</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;Infected&quot;</span><span class="p">,</span> <span class="s2">&quot;SIR Infected&quot;</span> <span class="o">+</span> <span class="n">NPI</span><span class="p">,</span> <span class="s2">&quot;LSTM&quot;</span><span class="p">,</span> <span class="s2">&quot;M2&quot;</span><span class="p">,</span> <span class="s2">&quot;Observed&quot;</span><span class="p">],</span> <span class="n">ax</span><span class="o">=</span><span class="n">ax</span><span class="p">);</span>
        <span class="n">ax</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="n">DELAY_START</span><span class="o">.</span><span class="n">strftime</span><span class="p">(</span><span class="s2">&quot;%Y-%m-</span><span class="si">%d</span><span class="s2">&quot;</span><span class="p">),</span> <span class="n">color</span><span class="o">=</span><span class="s2">&quot;grey&quot;</span><span class="p">);</span>
    <span class="k">return</span> <span class="n">test</span>
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[18]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="n">COUNTRIES</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;United Kingdom&quot;</span><span class="p">,</span> <span class="s2">&quot;Netherlands&quot;</span><span class="p">,</span> <span class="s2">&quot;Japan&quot;</span><span class="p">,</span> <span class="s2">&quot;United States&quot;</span><span class="p">,</span> <span class="s2">&quot;Australia&quot;</span><span class="p">,</span> <span class="s2">&quot;China&quot;</span><span class="p">]</span>
<span class="k">for</span> <span class="n">COUNTRY</span> <span class="ow">in</span> <span class="n">COUNTRIES</span><span class="p">:</span>
    <span class="n">SIR_LSTM</span> <span class="o">=</span> <span class="n">LSTM_M2</span><span class="p">(</span><span class="n">COUNTRY</span><span class="p">)</span>

    <span class="n">N</span> <span class="o">=</span> <span class="n">population_df</span><span class="p">[</span><span class="n">population_df</span><span class="p">[</span><span class="s2">&quot;Country&quot;</span><span class="p">]</span> <span class="o">==</span> <span class="n">COUNTRY</span><span class="p">][</span><span class="s2">&quot;Population&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">values</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
    <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;Population in&#39;</span><span class="p">,</span> <span class="n">COUNTRY</span><span class="p">,</span> <span class="s2">&quot;:&quot;</span><span class="p">,</span> <span class="n">N</span><span class="p">)</span>
    <span class="n">results</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">columns</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;RMSE&quot;</span><span class="p">,</span> <span class="s2">&quot;MAE&quot;</span><span class="p">,</span> <span class="s2">&quot;MAPE&quot;</span><span class="p">])</span>
    <span class="n">DELAY_START</span><span class="p">,</span> <span class="n">df_params</span><span class="p">,</span> <span class="n">NPI_dates</span><span class="p">,</span> <span class="n">days_delay</span> <span class="o">=</span> <span class="n">SIR_LSTM</span><span class="o">.</span><span class="n">estimate_country</span><span class="p">(</span><span class="n">jhu_data</span><span class="p">,</span> 
                                                                          <span class="n">population_data</span><span class="p">,</span> 
                                                                          <span class="n">oxcgrt_data</span><span class="p">,</span> 
                                                                          <span class="n">NPIS</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
    <span class="k">for</span> <span class="n">intervention</span> <span class="ow">in</span> <span class="n">NPIS</span><span class="p">:</span>
        <span class="nb">print</span><span class="p">(</span><span class="n">intervention</span><span class="p">)</span>
        <span class="k">if</span> <span class="n">DELAY_START</span> <span class="ow">is</span> <span class="kc">False</span><span class="p">:</span>
            <span class="n">errors</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">columns</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;RMSE&quot;</span><span class="p">,</span> <span class="s2">&quot;MAE&quot;</span><span class="p">,</span> <span class="s2">&quot;MAPE&quot;</span><span class="p">])</span>
            <span class="n">errors</span> <span class="o">=</span> <span class="n">errors</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">pd</span><span class="o">.</span><span class="n">Series</span><span class="p">([</span><span class="n">np</span><span class="o">.</span><span class="n">nan</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">nan</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">nan</span><span class="p">],</span> <span class="n">index</span><span class="o">=</span><span class="n">errors</span><span class="o">.</span><span class="n">columns</span> <span class="p">),</span> <span class="n">ignore_index</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
            <span class="n">errors</span> <span class="o">=</span> <span class="n">errors</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="n">pd</span><span class="o">.</span><span class="n">Index</span><span class="p">([</span><span class="n">intervention</span><span class="p">]))</span>
            <span class="n">results</span> <span class="o">=</span> <span class="n">results</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">errors</span><span class="p">)</span>
            <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;too little data&quot;</span><span class="p">,</span> <span class="n">intervention</span><span class="p">)</span>
        <span class="k">else</span><span class="p">:</span>
            <span class="n">df</span><span class="p">,</span> <span class="n">train</span><span class="p">,</span> <span class="n">test</span> <span class="o">=</span> <span class="n">preprocess_data</span><span class="p">(</span><span class="n">COUNTRY</span><span class="p">)</span>
            <span class="n">selection</span> <span class="o">=</span> <span class="n">train</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>
            <span class="n">res_df</span> <span class="o">=</span> <span class="n">get_res_df</span><span class="p">(</span><span class="n">NPI</span><span class="o">=</span><span class="n">intervention</span><span class="p">,</span> <span class="n">selection</span><span class="o">=</span><span class="n">selection</span><span class="p">,</span> <span class="n">plot</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
            <span class="n">errors</span> <span class="o">=</span> <span class="n">SIR_LSTM</span><span class="o">.</span><span class="n">compute_errors</span><span class="p">(</span><span class="n">N</span><span class="p">,</span> <span class="n">test</span><span class="p">)</span>
            <span class="n">errors</span> <span class="o">=</span> <span class="n">errors</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="n">pd</span><span class="o">.</span><span class="n">Index</span><span class="p">([</span><span class="n">intervention</span><span class="p">]))</span>
            <span class="n">results</span> <span class="o">=</span> <span class="n">results</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">errors</span><span class="p">)</span>
    <span class="n">display</span><span class="p">(</span><span class="n">results</span><span class="p">)</span>
    <span class="n">results</span><span class="o">.</span><span class="n">to_pickle</span><span class="p">(</span><span class="s1">&#39;./results/&#39;</span> <span class="o">+</span> <span class="n">COUNTRY</span> <span class="o">+</span> <span class="s2">&quot;_errors_SIR&quot;</span><span class="p">)</span>
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[13]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="n">results[-1] <span class="c1"># Display results from last country, wheren NaN values indicate missing data</span></span>
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="jp-Cell-outputWrapper">
            <div class="jp-OutputArea jp-Cell-outputArea">
                <div class="jp-OutputArea-child">
                    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[13]:</div>

                    <div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
                        <div>
                            <style scoped>
                                .dataframe tbody tr th:only-of-type {
                                    vertical-align: middle;
                                }

                                .dataframe tbody tr th {
                                    vertical-align: top;
                                }

                                .dataframe thead th {
                                    text-align: right;
                                }
                            </style>
                            <table border="1" class="dataframe">
                                <thead>
                                    <tr style="text-align: right;">
                                        <th></th>
                                        <th>RMSE</th>
                                        <th>MAE</th>
                                        <th>MAPE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>School_closing</th>
                                        <td>0.2185</td>
                                        <td>0.071143</td>
                                        <td>4.452055</td>
                                    </tr>
                                    <tr>
                                        <th>Workplace_closing</th>
                                        <td>0.4526</td>
                                        <td>0.170357</td>
                                        <td>1.213472</td>
                                    </tr>
                                    <tr>
                                        <th>Cancel_events</th>
                                        <td>NaN</td>
                                        <td>NaN</td>
                                        <td>NaN</td>
                                    </tr>
                                    <tr>
                                        <th>Gatherings_restrictions</th>
                                        <td>0.0363</td>
                                        <td>1.543546</td>
                                        <td>2.926284e</td>
                                    </tr>
                                    <tr>
                                        <th>Transport_closing</th>
                                        <td>NaN</td>
                                        <td>NaN</td>
                                        <td>NaN</td>
                                    </tr>
                                    <tr>
                                        <th>Stay_home_restrictions</th>
                                        <td>NaN</td>
                                        <td>NaN</td>
                                        <td>NaN</td>
                                    </tr>
                                    <tr>
                                        <th>Internal_movement_restrictions</th>
                                        <td>NaN</td>
                                        <td>NaN</td>
                                        <td>NaN</td>
                                    </tr>
                                    <tr>
                                        <th>International_movement_restrictions</th>
                                        <td>0.5270</td>
                                        <td>0.036718</td>
                                        <td>2.777051</td>
                                    </tr>
                                    <tr>
                                        <th>Information_campaigns</th>
                                        <td>NaN</td>
                                        <td>NaN</td>
                                        <td>NaN</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span> 
</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`
    )
    return (
        <>{elem}</>
    )
}

export default AlgorithmSIR