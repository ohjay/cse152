---
layout: post
title: "Welcome to CSE 152!"
date: 2018-09-07 01:01:01
categories: [lab, notes, section, other]
image:
  feature: https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/UCSD-Warren_Pano.jpg/2880px-UCSD-Warren_Pano.jpg
  credit: Wikipedia
  creditlink: https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/UCSD-Warren_Pano.jpg/2880px-UCSD-Warren_Pano.jpg
comments: true
quarter: fa18
---

As the title says, welcome to CSE 152!

<hr />

This is the first post on the website, and I'm labeling it with all of the tags in order to get things started. Looking forward to creating and posting lots of computer vision (CV)-related content on this website! I'll make posts whenever there's new stuff to share, and for your convenience all of the posts will be aggregated and organized on the [resources](https://owenjow.xyz/cse152/resources) page.

Let's have a good quarter, everybody!

\- o.

Example of embedding a Google Slides presentation:

<div class="iframe-container aspect-58">
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTQgHjhwmHtPW5C5g3UkAbNnfUGywUMG2CAq63nlIpt2VH-57C2ez-CulPG3Lf6Tbo9JMrQtpNERhSx/embed?start=false&loop=false&delayms=5000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

Example of embedding a PDF file:

<div id="slides"></div>
<script src="{{ site.url }}/js/pdfobject.min.js"></script>
<script>PDFObject.embed("{{ site.url }}/slides/fa18/section1.pdf", "#slides");</script>
<style>.pdfobject-container { height: 610px; }</style>

Example of embedding a YouTube video:

<div class="iframe-container aspect-5625">
  <iframe src="https://www.youtube.com/embed/-rnZ5p1BNFE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

Example of LaTeX -> markdown:

<h2 id="image-formation">Image Formation</h2>
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

Example of formatting:

## Forage occaecat cardigan qui

Fashion axe hella gastropub lo-fi kogi 90's aliquip +1 veniam delectus tousled. Cred sriracha locavore gastropub kale chips, iPhone mollit sartorial. Anim dolore 8-bit, pork belly dolor photo booth aute flannel small batch. Dolor disrupt ennui, tattooed whatever salvia Banksy sartorial roof party selfies raw denim sint meh pour-over. Ennui eu cardigan sint, gentrify iPhone cornhole.

> Whatever velit occaecat quis deserunt gastropub, leggings elit tousled roof party 3 wolf moon kogi pug blue bottle ea. Fashion axe shabby chic Austin quinoa pickled laborum bitters next level, disrupt deep v accusamus non fingerstache.

large feature image[^1]

[^1]: Texture image courtesty of [Lovetextures](http://www.lovetextures.com/)
