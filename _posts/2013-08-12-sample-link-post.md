---
layout: post
title: "Sample Link Post"
excerpt: "Try click on the link icon."
categories: [other]
link: http://renyuanz.github.io
share: true
quarter: fa18
---

<h1 id="image-formation">Image Formation</h1>
<ul>
<li><p>In a camera, the process of image formation consists of (1) photons striking a grid of detector cells and (2) the charge at each detector cell (pixel) being read out as brightness. Typically, the detectors are CMOS or CCD, both of which convert photons into electric charge.</p></li>
<li><p>Today’s topic is <em>geometric</em> image formation, which means we’ll concern ourselves with <em>where points in the world show up in the image</em> (i.e. geometry being that of the perspective projection model).</p></li>
<li><p>In perspective projection, distant objects appear smaller than they would if they were closer.</p>
<ul>
<li><p>A line from <span class="math inline">\((x, 0, z)\)</span> to <span class="math inline">\((x, y, z)\)</span> projects to a line from <span class="math inline">\(\left(\frac{fx}{z}, 0\right)\)</span> to <span class="math inline">\(\left(\frac{fx}{z}, \frac{fy}{z}\right)\)</span>.</p></li>
<li><p>A line from <span class="math inline">\((x, 0, 2z)\)</span> to <span class="math inline">\((x, y, 2z)\)</span> projects to a line from <span class="math inline">\(\left(\frac{fx}{2z}, 0\right)\)</span> to <span class="math inline">\(\left(\frac{fx}{2z}, \frac{fy}{2z}\right)\)</span>.</p></li>
</ul></li>
<li><p>Geometric properties:</p>
<ul>
<li><p>For the most part, lines are still lines after projection.</p>
<ul>
<li><p><em>Justification.</em> If the equation of a line is <span class="math display">\[\begin{bmatrix}p_x \\ p_y\end{bmatrix} =
      \begin{bmatrix}m_x \\ m_y\end{bmatrix}p_z +
      \begin{bmatrix}b_x \\ b_y\end{bmatrix}\]</span> then each projected point is <span class="math display">\[\begin{bmatrix}p&#39;_x \\ p&#39;_y\end{bmatrix} =
      \begin{bmatrix}fp_x / p_z \\ fp_y / p_z\end{bmatrix} =
      \begin{bmatrix}f(m_xp_z + b_x) / p_z \\ f(m_yp_z + b_y) / p_z\end{bmatrix}\]</span> and we have <span class="math display">\[\begin{aligned}
      p&#39;_x = \frac{f(m_xp_z + b_x)}{p_z} \implies (p&#39;_x - fm_x)p_z &amp;= fb_x \\
      p_z &amp;= \frac{fb_x}{p&#39;_x - fm_x}
      \end{aligned}\]</span> which means <span class="math display">\[\begin{aligned}
      p&#39;_y &amp;= \frac{f(m_yp_z + b_y)}{p_z} \\
      p&#39;_yp_z &amp;= f(m_yp_z + b_y) \\
      p&#39;_y\frac{fb_x}{p&#39;_x - fm_x} &amp;= f\left(m_y\frac{fb_x}{p&#39;_x - fm_x} + b_y\right) \\
      p&#39;_y &amp;= \left(m_y\frac{fb_x}{p&#39;_x - fm_x} + b_y\right)\left(\frac{p&#39;_x - fm_x}{b_x}\right) \\
      p&#39;_y &amp;= fm_y + \frac{b_y(p&#39;_x - fm_x)}{b_x} \\
      p&#39;_y &amp;= \frac{b_y}{b_x}p&#39;_x + \left(fm_y - \frac{fb_ym_x}{b_x}\right)\:\:\: \text{(the familiar $y = mx + b$ form)}
      \end{aligned}\]</span></p></li>
<li><p><em>Exception</em>: a line through the focal point <span class="math inline">\((0, 0, 0)\)</span> projects to a point.</p>
<ul>
<li><p><em>Justification.</em> <span class="math inline">\((b_x, b_y) = (0, 0)\)</span> and therefore <span class="math inline">\((p&#39;_x, p&#39;_y) = (fm_x, fm_y)\)</span> every time.</p></li>
</ul></li>
</ul></li>
</ul></li>
</ul>
