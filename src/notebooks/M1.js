import React from 'react';
import '../assets/css/notebook1.css';
import parse from 'html-react-parser'

import structureImage from "assets/img/M1_structure.png";
import predictions from "assets/img/M1_pred.png";
import weights from "assets/img/weights2.png";

const AlgorithmLSTM = () => {


    const elem = parse(
        `
        <div class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">
    <div class="jp-Cell-inputWrapper">
        <div class="jp-InputPrompt jp-InputArea-prompt"></div>
        <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
            <h1 id="M1---LSTM-based">M1 - LSTM based<a class="anchor-link" href="#M1---LSTM-based">&#182;</a></h1>
        </div>
    </div>
    <div class="jp-Cell-inputWrapper">
        <div class="jp-InputPrompt jp-InputArea-prompt"></div>
        <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
            <p>
                Ideally, a hybrid model can include aspects of both SIR- and ML- models. At least two important aspects of the SIR model that have to be included: <strong>phase dependent parameters</strong> and
                <strong>high long-term accuracy</strong>. Phase dependent parameters have to be included since the time series data is non-stationary and therefore cannot fit to one set of parameter values for the entire dataset, and its
                long term accuracy.
            </p>
            <p>Two models were implemented to combine the model aspects. Model 1 (M1) was based on an LSTM model enhanced by SIR model predictions. Contrarily, Model 2 (M2) was based on SIR models enhanced by LSTM predictions.</p>
        </div>
    </div>

    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
        </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
        <p style="text-align: center"><img style="width: 70%" src=${structureImage} alt="M1"></p>

        </div>
        </div>
  

    <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[8]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre style="white-space: pre-line;"><span></span><span class="kn">import</span> <span class="nn">os</span>
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
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[9]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                        <pre style="white-space: pre-line;"><span></span><span class="kn">from</span> <span class="nn">core.nn.LSTMmodel</span> <span class="kn">import</span> <span class="n">LSTM</span>
            <span class="kn">from</span> <span class="nn">core.nn</span> <span class="kn">import</span> <span class="n">compute_weight</span>
            <span class="kn">from</span> <span class="nn">SIR.nn</span> <span class="kn">import</span> <span class="o">*</span>
            <span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>

            <span class="n">COUNTRY</span> <span class="o">=</span> <span class="s2">&quot;Netherlands&quot;</span>
            <span class="n">SIR_predictions</span><span class="p">,</span> <span class="n">NPI_data</span><span class="p">,</span> <span class="n">days_delay</span> <span class="o">=</span> <span class="n">SIR</span><span class="p">(</span><span class="n">COUNTRY</span><span class="o">=</span><span class="s2">&quot;Netherlands&quot;</span><span class="p">)</span>

            <span class="o">%</span><span class="k">load_ext</span> autoreload
            <span class="o">%</span><span class="k">autoreload</span> 2
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
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[10]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                        <pre style="white-space: pre-line;"><span></span><span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
            <span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
            <span class="kn">import</span> <span class="nn">scipy.stats</span>
            <span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
            <span class="kn">import</span> <span class="nn">seaborn</span> <span class="k">as</span> <span class="nn">sns</span>
            <span class="n">sns</span><span class="o">.</span><span class="n">set</span><span class="p">()</span>

            <span class="n">FUTURE_DAYS</span> <span class="o">=</span> <span class="mi">35</span>
            <span class="n">TARGET</span> <span class="o">=</span> <span class="s2">&quot;Confirmed cases&quot;</span>
            <span class="n">TYPE</span> <span class="o">=</span> <span class="s2">&quot;LSTMCell&quot;</span>
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
            <h3
                id="Here,-LSTM-and-SIR-predictions-are-computed-separately-and-combined-using-a-rolling-update-mechanism.-From-the-SIR-model-predictions,-the-parameters-are-calculated-that-are-associated-with-a-given-type-of-NPI.-The-rolling-update-mechanism-ensures-that-the-model-is-trained-on-data-that-includes-SIR-prediction-bias."
            >
                Here, LSTM and SIR predictions are computed separately and combined using a rolling update mechanism. From the SIR model predictions, the parameters are calculated that are associated with a given type of NPI. The rolling
                update mechanism ensures that the model is trained on data that includes SIR prediction bias.
                <a
                    class="anchor-link"
                    href="#Here,-LSTM-and-SIR-predictions-are-computed-separately-and-combined-using-a-rolling-update-mechanism.-From-the-SIR-model-predictions,-the-parameters-are-calculated-that-are-associated-with-a-given-type-of-NPI.-The-rolling-update-mechanism-ensures-that-the-model-is-trained-on-data-that-includes-SIR-prediction-bias."
                >
                    &#182;
                </a>
            </h3>
        </div>
    </div>
    <div class="jp-Cell-inputWrapper">
        <div class="jp-InputPrompt jp-InputArea-prompt"></div>
        <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
            <p>M1 is based on the following steps:</p>
            <ol>
                <li><p>Compute the gradient of the SIR predictions at timestep t instead of using the direct predictions for scaling/normalization purposes.</p></li>
                <li><p>Compute the trend of the given NPI</p></li>
                <li>
                    <p>
                        Compute weight of NPI at a given timestep. The weight is a value between 0 and 1 and indicates the strength that is expected an NPI to have towards the effect on new confirmed cases. When the weight is equal to 1,
                        NPI strength is at its maximum. Weights are dependent of the delay period - the period between implementing an NPI and the effect on the number of cases.
                    </p>
                </li>
                <li><p>Update LSTM model using the rolling update mechanism.</p></li>
                <li><p>Repeat steps 1-4 for every NPI.</p></li>
            </ol>
        </div>
    </div>
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell">
        <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
                <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[11]:</div>
                <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                    <div class="CodeMirror cm-s-jupyter">
                        <div class="highlight hl-ipython3">
                            <pre><span></span><span class="c1"># Select NPI</span>
            <span class="n">NPI</span> <span class="o">=</span> <span class="s2">&quot;Gatherings_restrictions&quot;</span>
            <span class="n">LSTM_predictions</span><span class="p">,</span> <span class="n">feature_data</span><span class="p">,</span> <span class="n">SIR_data</span><span class="p">,</span> <span class="n">weights</span> <span class="o">=</span> <span class="p">[],</span> <span class="p">[],</span> <span class="p">[],</span> <span class="p">[]</span>
            <span class="k">for</span> <span class="n">day</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">SIR_predictions</span><span class="p">)):</span>
                
                <span class="c1"># Compute Gradient instead of using the direct predictions </span>
                <span class="c1"># for scaling/normalization purposes</span>
                <span class="n">gradient</span> <span class="o">=</span> <span class="n">get_gradient</span><span class="p">(</span><span class="n">SIR_predictions</span><span class="p">[</span><span class="n">day</span> <span class="o">+</span> <span class="mi">1</span><span class="p">],</span> <span class="n">SIR_predictions</span><span class="p">[</span><span class="n">day</span><span class="p">])</span>
                <span class="n">SIR_data</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">gradient</span><span class="p">)</span>
                    
                <span class="c1"># Compute trend of NPI</span>
                <span class="n">y</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">NPI_data</span><span class="p">[</span><span class="n">NPI</span><span class="p">])</span>
                <span class="n">z</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">polyfit</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="n">NPI_data</span><span class="p">[</span><span class="n">NPI</span><span class="p">])),</span> <span class="n">y</span><span class="p">,</span> <span class="mi">1</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span>
                
                <span class="c1"># Compute new weight, where weight is between 0 and 1,</span>
                <span class="c1"># if 0, then influence of the NPI predictions is none, </span>
                <span class="c1"># if 1, then influence of the LSTM model predictions is none.</span>
                <span class="n">weight</span> <span class="o">=</span> <span class="n">compute_weight</span><span class="p">(</span><span class="n">z</span><span class="p">,</span> <span class="n">day</span><span class="p">,</span> <span class="n">days_delay</span><span class="p">)</span>
                <span class="n">weights</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">weight</span><span class="p">)</span>
                
                <span class="c1"># Here, the weight of the NPI (z * weight) at timestep i</span>
                <span class="c1"># is determined by the delay period (the period between</span>
                <span class="c1"># implementing an NPI and the effect on the number of cases).</span>
                <span class="n">result</span> <span class="o">=</span> <span class="n">z</span> <span class="o">*</span> <span class="n">weight</span>
                <span class="n">feature_data</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">result</span><span class="p">)</span>

            <span class="c1"># Multivariate LSTM model with SIR based NPI predictions as </span>
            <span class="c1"># input feature, along with the number of (previous) </span>
            <span class="c1"># confirmed cases (df) and SIR predictions.</span>
            <span class="n">model</span> <span class="o">=</span> <span class="n">LSTM</span><span class="p">(</span><span class="n">SIR_data</span><span class="o">=</span><span class="n">SIR_data</span><span class="p">,</span> <span class="n">feature</span><span class="o">=</span><span class="n">feature_data</span><span class="p">,</span> <span class="n">input_data</span><span class="o">=</span><span class="n">df</span><span class="p">,</span>
                        <span class="n">COUNTRY</span><span class="p">,</span> <span class="n">FUTURE_DAYS</span><span class="p">,</span>
                        <span class="n">TARGET</span><span class="p">,</span> <span class="n">TYPE</span><span class="p">)</span>
            <span class="n">model</span><span class="o">.</span><span class="n">fit</span><span class="p">()</span>
            <span class="n">LSTM_pred</span> <span class="o">=</span> <span class="n">model</span><span class="o">.</span><span class="n">predict</span><span class="p">(</span><span class="n">future_days</span><span class="o">=</span><span class="n">FUTURE_DAYS</span><span class="p">)</span>
            <span class="n">plotweights</span><span class="p">(</span><span class="n">weights</span><span class="p">)</span>
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

                    <div class="jp-RenderedImage jp-OutputArea-output">
                        <img
                            src=${weights}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Repeat-for-every-country">Repeat for every country<a class="anchor-link" href="#Repeat-for-every-country">&#182;</a></h3>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[12]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">LSTM</span><span class="o">.</span><span class="n">predict</span><span class="p">(</span><span class="n">countries</span><span class="o">=</span><span class="s2">&quot;all&quot;</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p style="text-align: center"><img style="width: 100%" src=${predictions} alt="M1"></p>

</div>
</div>

</div>
`
    )
    return (
        <>{elem}</>
    )
}

export default AlgorithmLSTM