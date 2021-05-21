import React from 'react';
import '../assets/css/notebook1.css';
import parse from 'html-react-parser'
import uqImg from 'assets/img/UQ_M1_M2.png';
import uqStructure from 'assets/img/SA_UQ_Methods.png';

const UQ = () => {



    const elem = parse(
        `
        <div class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">
        <div class="jp-Cell-inputWrapper">
        <div class="jp-InputPrompt jp-InputArea-prompt"></div>
            <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
                <h1 id="M1---LSTM-based">Uncertainty Quantification of model predictions<a class="anchor-link" href="#M1---LSTM-based">&#182;</a></h1>
            </div>
        </div>
        <div class="jp-Cell-inputWrapper">
        <div class="jp-InputPrompt jp-InputArea-prompt"></div>
        <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
            <p>
            Ideally, a model can predict outcomes accurately for new inputs. Aspects to keep in mind when predicting future outcomes from previous data points are the reliability of observations and the influence by potential noise. For reliability of observations the question at stake is how noisy the output variable $y$ is for a given input variable $x$. Furthermore, when making predictions of unseen outcomes, the observed values can be influenced by potential noise. However, by introducing noise or uncertainties in the input data, outcomes can never be absolutely certain, even with a very large input dataset. An overview of methods to quantify uncertainty and capture sensitivity of parameters is shown in the figure below; making model predictions goes along with sensitivity analysis (SA) and uncertainty quantification (UQ). When needed, the model gets re-calibrated based on SA and UQ. 
            </p>
         </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p style="text-align: center"><img style="width: 75%; padding: 2em" src=${uqStructure} alt="UQ"></p>

    </div>
    </div>

      <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
         <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
               <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[1]:</div>
               <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                  <div class="CodeMirror cm-s-jupyter">
                     <div class=" highlight hl-ipython3">
                        <pre><span></span><span class="kn">import</span> <span class="nn">os</span>
<span class="n">os</span><span class="o">.</span><span class="n">chdir</span><span class="p">(</span><span class="s2">&quot;UQ_toolbox&quot;</span><span class="p">)</span>
</pre>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
         <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
               <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[2]:</div>
               <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                  <div class="CodeMirror cm-s-jupyter">
                     <div class=" highlight hl-ipython3">
                        <pre><span></span><span class="o">%</span><span class="k">load_ext</span> autoreload
<span class="o">%</span><span class="k">autoreload</span> 2

<span class="kn">import</span> <span class="nn">uncertainty_toolbox</span> <span class="k">as</span> <span class="nn">uct</span>
<span class="kn">import</span> <span class="nn">pickle</span>
<span class="kn">import</span> <span class="nn">uncertainty_toolbox.viz</span> <span class="k">as</span> <span class="nn">uviz</span>
</pre>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
         <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
               <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[33]:</div>
               <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                  <div class="CodeMirror cm-s-jupyter">
                     <div class=" highlight hl-ipython3">
                        <pre><span></span><span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>

<span class="n">df</span> <span class="o">=</span> <span class="n">pickle</span><span class="o">.</span><span class="n">load</span><span class="p">(</span><span class="nb">open</span><span class="p">(</span> <span class="s1">&#39;../netherlands_UQ.p&#39;</span><span class="p">,</span> <span class="s2">&quot;rb&quot;</span> <span class="p">))</span>
<span class="n">y</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="s2">&quot;valCases&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>
<span class="n">predictions</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span> <span class="mi">2</span><span class="p">:]</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span><span class="o">.</span><span class="n">dropna</span><span class="p">()[</span><span class="o">-</span><span class="nb">len</span><span class="p">(</span><span class="n">y</span><span class="p">):]</span><span class="o">.</span><span class="n">values</span>
<span class="n">predictions_std</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span> <span class="mi">3</span><span class="p">:]</span><span class="o">.</span><span class="n">std</span><span class="p">(</span><span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span><span class="o">.</span><span class="n">dropna</span><span class="p">()[</span><span class="o">-</span><span class="nb">len</span><span class="p">(</span><span class="n">y</span><span class="p">):]</span><span class="o">.</span><span class="n">values</span> 
<span class="n">bounds</span> <span class="o">=</span> <span class="p">[</span><span class="n">np</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">predictions</span><span class="p">)</span> <span class="o">/</span> <span class="mf">3.5</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">max</span><span class="p">(</span><span class="n">predictions</span><span class="p">)</span> <span class="o">*</span> <span class="mf">1.5</span><span class="p">]</span>
<span class="n">x</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">linspace</span><span class="p">(</span><span class="n">bounds</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">bounds</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="nb">len</span><span class="p">(</span><span class="n">y</span><span class="p">))</span>

<span class="c1"># Compute all uncertainty metrics</span>
<span class="n">metrics</span> <span class="o">=</span> <span class="n">uct</span><span class="o">.</span><span class="n">metrics</span><span class="o">.</span><span class="n">get_all_metrics</span><span class="p">(</span><span class="n">predictions</span><span class="p">,</span> <span class="n">predictions_std</span><span class="p">,</span> <span class="n">y</span><span class="p">)</span>
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
                     <pre> (1/n) Calculating accuracy metrics
 (2/n) Calculating average calibration metrics
</pre>
                  </div>
               </div>
               <div class="jp-OutputArea-child">
                  <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
                  <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="application/vnd.jupyter.stderr">
                     <pre> 10%|█         | 1/10 [00:00&lt;00:01,  5.08it/s]</pre>
                  </div>
               </div>
               <div class="jp-OutputArea-child">
                  <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
                  <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
                     <pre> (3/n) Calculating adversarial group calibration metrics
  [1/2] for mean absolute calibration error
Measuring adversarial group calibration by spanning group size between 0.0 and 1.0, in 10 intervals
</pre>
                  </div>
               </div>
               <div class="jp-OutputArea-child">
                  <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
                  <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="application/vnd.jupyter.stderr">
                     <pre>100%|██████████| 10/10 [00:01&lt;00:00,  5.87it/s]
 10%|█         | 1/10 [00:00&lt;00:01,  5.21it/s]</pre>
                  </div>
               </div>
               <div class="jp-OutputArea-child">
                  <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
                  <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
                     <pre>  [2/2] for root mean squared calibration error
Measuring adversarial group calibration by spanning group size between 0.0 and 1.0, in 10 intervals
</pre>
                  </div>
               </div>
               <div class="jp-OutputArea-child">
                  <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
                  <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="application/vnd.jupyter.stderr">
                     <pre>100%|██████████| 10/10 [00:01&lt;00:00,  6.41it/s]
</pre>
                  </div>
               </div>
               <div class="jp-OutputArea-child">
                  <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
                  <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
                     <pre> (4/n) Calculating sharpness metrics
 (n/n) Calculating proper scoring rule metrics
**Finished Calculating All Metrics**


===================== Accuracy Metrics =====================
  MAE           1138.072
  RMSE          1348.835
  MDAE          1048.666
  MARPD         22.679
  R2            0.669
  Correlation   0.823
=============== Average Calibration Metrics ================
  Root-mean-squared Calibration Error   0.184
  Mean-absolute Calibration Error       0.156
  Miscalibration Area                   0.158
========== Adversarial Group Calibration Metrics ===========
  Mean-absolute Adversarial Group Calibration Error
     Group Size: 0.11 -- Calibration Error: 0.312
     Group Size: 0.56 -- Calibration Error: 0.202
     Group Size: 1.00 -- Calibration Error: 0.156
  Root-mean-squared Adversarial Group Calibration Error
     Group Size: 0.11 -- Calibration Error: 0.367
     Group Size: 0.56 -- Calibration Error: 0.237
     Group Size: 1.00 -- Calibration Error: 0.184
==================== Sharpness Metrics =====================
  Sharpness   3935.431
=================== Scoring Rule Metrics ===================
  Negative-log-likelihood   61.509
  CRPS                      1099.510
  Check Score               554.522
  Interval Score            7137.733
</pre>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
         <div class="jp-Cell-inputWrapper">
            <div class="jp-InputArea jp-Cell-inputArea">
               <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[34]:</div>
               <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
                  <div class="CodeMirror cm-s-jupyter">
                     <div class=" highlight hl-ipython3">
                        <pre><span></span><span class="n">bounds</span> <span class="o">=</span> <span class="p">[</span><span class="n">np</span><span class="o">.</span><span class="n">min</span><span class="p">(</span><span class="n">predictions</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">max</span><span class="p">(</span><span class="n">predictions</span><span class="p">)</span> <span class="o">*</span> <span class="mf">1.5</span><span class="p">]</span>
<span class="n">x</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">linspace</span><span class="p">(</span><span class="n">bounds</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">bounds</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="nb">len</span><span class="p">(</span><span class="n">y</span><span class="p">))</span>

<span class="c1"># Make xy plot</span>
<span class="n">uviz</span><span class="o">.</span><span class="n">plotly_xy</span><span class="p">(</span><span class="n">predictions</span><span class="p">,</span> <span class="n">predictions_std</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">n_subset</span><span class="o">=</span><span class="nb">int</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">y</span><span class="p">)</span> <span class="o">/</span> <span class="mf">2.5</span><span class="p">),</span> <span class="n">ylims</span><span class="o">=</span><span class="n">bounds</span><span class="p">)</span>
<span class="n">uviz</span><span class="o">.</span><span class="n">plotly_intervals</span><span class="p">(</span><span class="n">predictions</span><span class="p">,</span> <span class="n">predictions_std</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">n_subset</span><span class="o">=</span><span class="nb">int</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">y</span><span class="p">)</span> <span class="o">/</span> <span class="mf">1.5</span><span class="p">),</span> <span class="n">ylims</span><span class="o">=</span><span class="p">[</span><span class="mi">100</span><span class="p">,</span> <span class="mi">18000</span><span class="p">])</span>
<span class="n">uviz</span><span class="o">.</span><span class="n">plotly_calibration</span><span class="p">(</span><span class="n">predictions</span><span class="p">,</span> <span class="n">predictions_std</span><span class="p">,</span> <span class="n">y</span><span class="p">)</span>
<span class="n">uviz</span><span class="o">.</span><span class="n">plotly_intervals_ordered</span><span class="p">(</span><span class="n">predictions</span><span class="p">,</span> <span class="n">predictions_std</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">n_subset</span><span class="o">=</span><span class="nb">int</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">y</span><span class="p">)</span> <span class="o">/</span> <span class="mf">1.5</span><span class="p">),</span> <span class="n">ylims</span><span class="o">=</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">20000</span><span class="p">])</span>
</pre>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
         </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
         <p style="text-align: center"><img style="width: 100%" src=${uqImg} alt="UQ"></p>
 
         </div>
         </div>


         <div class="jp-Cell-inputWrapper">
         <div class="jp-InputPrompt jp-InputArea-prompt"></div>
         <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
             <p>
             First, the confidence bands show that predicted values fall within the 95% confidence bands. Average calibration is a measure of over- or under confidence of the model. Here, average calibration shows that M1 is slightly under confident, which indicates that there is too much uncertainty in the input data. Prediction intervals show the predicted values against the observed values, along with their confidence intervals. The same method is applied to compute ordered prediction intervals, where the index (x-axis) is ordered by the number of confirmed cases. The last two graphs indicate larger uncertainty when number of confirmed cases is small. 
             Results indicate that both models are slightly under-confident, with a mis-calibrated area of 0.08 and 0.19 for M1 and M2 respectively. Prediction intervals show that the model outcome is more uncertain when the number of confirmed cases is larger. For both models, confidence bands increase as the number of confirmed cases increase. 
             
              </p>
          </div>
     </div>
         
   </div>
       
`
    )
    return (
        <>{elem}</>
    )
}

export default UQ