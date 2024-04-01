/*

shortcut.js
  control shortcut obj

*/

class shortcut_M extends set_ele_M {
  list = [
    //high
    { str: "\\TeX", cmd: "\\TeX" },
    { str: "\\LaTeX", cmd: "\\LaTeX" },
    { str: "tab", cmd: "\t" },
    { str: "space", cmd: "\\ " },
    { str: "backslash", cmd: "\\backslash" },
    { str: "newline", cmd: "\\\\" },
    { str: "a^{b}", cmd: "^{}" },
    { str: "a_{b}", cmd: "_{}" },
    { str: "\\text{&=}", cmd: "&=" },
    { str: ",", cmd: "," },
    { str: ".", cmd: "." },
    { str: ";", cmd: ";" },
    { str: "\\ldotp", cmd: "\\ldotp" },
    { str: "\\cdotp", cmd: "\\cdotp" },
    { str: "\\colon", cmd: "\\colon" },
    { str: "\\text{normal}", cmd: "\\text{}" },
    { str: "css-style", cmd: "\\style{}{}" },
    { str: "color", cmd: "{\\color{}}" },
    { str: "background", cmd: "\\bbox[]{}" },
    { str: "\\mathbb{blackboard-bold}", cmd: "\\mathbb{}" },
    { str: "\\mathcal{calligraphic}", cmd: "\\mathcal{}" },
    { str: "\\mathrm{roman}", cmd: "\\mathrm{}" },
    { str: "\\mathit{math-italic}", cmd: "\\mathit{}" },
    { str: "\\mathbf{boldface}", cmd: "\\mathbf{}" },
    { str: "\\mathsf{sans-serif}", cmd: "\\mathsf{}" },
    { str: "\\mathtt{typewriter}", cmd: "\\mathtt{}" },
    { str: "\\underline{under-line}", cmd: "\\underline{}" },
    { str: "\\overline{over-line}", cmd: "\\overline{}" },
    { str: "\\underbrace{under-brace}", cmd: "\\underbrace{}" },
    { str: "\\overbrace{over-brace}", cmd: "\\overbrace{}" },
    { str: "\\widetilde{wide-tilde}", cmd: "\\widetilde{}" },
    { str: "\\widehat{wide-hat}", cmd: "\\widehat{}" },
    { str: "\\overrightarrow{left-arrow}", cmd: "\\overleftarrow{}" },
    { str: "\\overleftarrow{right-arrow}", cmd: "\\overleftarrow{}" },
    { str: "\\overleftrightarrow{arrow}", cmd: "\\overleftrightarrow{}" },
    { str: "|a|", cmd: "||" },
    { str: "\\acute{a}", cmd: "\\acute{}" },
    { str: "\\grave{a}", cmd: "\\grave{}" },
    { str: "\\ddot{a}", cmd: "\\ddot{}" },
    { str: "\\tilde{a}", cmd: "\\tilde{}" },
    { str: "\\bar{a}", cmd: "\\bar{}" },
    { str: "\\breve{a}", cmd: "\\breve{}" },
    { str: "\\check{a}", cmd: "\\check{}" },
    { str: "\\hat{a}", cmd: "\\hat{}" },
    { str: "\\vec{a}", cmd: "\\vec{}" },
    { str: "\\dot{a}", cmd: "\\dot{}" },

    //func
    { str: "\\frac{a}{b}", cmd: "\\frac{}{}" },
    { str: "\\dfrac{a}{b}", cmd: "\\dfrac{}{}" },
    { str: "\\sqrt{a}", cmd: "\\sqrt{}" },
    { str: "\\sqrt[b]{a}", cmd: "\\sqrt[]{}" },
    { str: "\\sin", cmd: "\\sin" },
    { str: "\\cos", cmd: "\\cos" },
    { str: "\\tan", cmd: "\\tan" },
    { str: "\\csc", cmd: "\\csc" },
    { str: "\\sec", cmd: "\\sec" },
    { str: "\\cot", cmd: "\\cot" },
    { str: "\\arcsin", cmd: "\\arcsin" },
    { str: "\\arccos", cmd: "\\arccos" },
    { str: "\\arctan", cmd: "\\arctan" },
    { str: "\\sinh", cmd: "\\sinh" },
    { str: "\\cosh", cmd: "\\cosh" },
    { str: "\\tanh", cmd: "\\tanh" },
    { str: "\\log", cmd: "\\log" },
    { str: "\\ln", cmd: "\\ln" },
    { str: "\\lg", cmd: "\\lg" },
    { str: "e^{a}", cmd: "e^{}" },
    { str: "\\exp{a}", cmd: "\\exp{}" },
    { str: "a\\mod{b}", cmd: "\\mod{}" },
    { str: "\\bmod{a}", cmd: "\\bmod{}" },
    { str: "a\\pmod{b}", cmd: "\\pmod{}" },
    { str: "{}_{a}C_{b}", cmd: "{}_{a}C_{b}" },
    { str: "{}_{a}H_{b}", cmd: "{}_{a}H_{b}" },
    { str: "{}_{a}P_{b}", cmd: "{}_{a}P_{b}" },
    { str: "\\sum_{a=0}^{b}", cmd: "\\sum_{}^{}" },
    { str: "\\prod_{a=0}^{b}", cmd: "\\prod_{}^{}" },
    { str: "\\coprod", cmd: "\\coprod" },
    { str: "\\bigotimes", cmd: "\\bigotimes" },
    { str: "\\bigoplus", cmd: "\\bigoplus" },
    { str: "\\bigodot", cmd: "\\bigodot" },
    { str: "\\biguplus", cmd: "\\biguplus" },
    { str: "\\bigvee", cmd: "\\bigvee" },
    { str: "\\bigwedge", cmd: "\\bigwedge" },
    { str: "\\bigcap", cmd: "\\bigcap" },
    { str: "\\bigcup", cmd: "\\bigcup" },
    { str: "\\bigsqcup", cmd: "\\bigsqcup" },
    { str: "\\int_{a}^{b}", cmd: "\\int_{a}^{b}" },
    { str: "\\iint_{a}^{b}", cmd: "\\iint_{a}^{b}" },
    { str: "\\iiint_{a}^{b}", cmd: "\\iiint_{a}^{b}" },
    { str: "\\idotsint_{a}^{b}", cmd: "\\idotsint_{a}^{b}" },
    { str: "\\smallint", cmd: "\\smallint" },
    { str: "\\oint", cmd: "\\oint" },
    { str: "\\max", cmd: "\\max" },
    { str: "\\min", cmd: "\\min" },
    { str: "\\sup", cmd: "\\sup" },
    { str: "\\inf", cmd: "\\inf" },
    { str: "\\lim", cmd: "\\lim" },
    { str: "\\limsup", cmd: "\\limsup" },
    { str: "\\varlimsup", cmd: "\\varlimsup" },
    { str: "\\liminf", cmd: "\\liminf" },
    { str: "\\varliminf", cmd: "\\varliminf" },
    { str: "\\injlim", cmd: "\\injlim" },
    { str: "\\varinjlim", cmd: "\\varinjlim" },
    { str: "\\projlim", cmd: "\\projlim" },
    { str: "\\varprojlim", cmd: "\\varprojlim" },
    { str: "\\det", cmd: "\\det" },
    { str: "\\gcd", cmd: "\\gcd" },
    { str: "\\Pr", cmd: "\\Pr" },

    //str
    { str: "=", cmd: "=" },
    { str: "+", cmd: "+" },
    { str: "-", cmd: "-" },
    { str: "\\times", cmd: "\\times" },
    { str: "\\cdot", cmd: "\\cdot" },
    { str: "\\div", cmd: "\\div" },
    { str: "/", cmd: "/" },
    { str: "\\pm", cmd: "\\pm" },
    { str: "\\mp", cmd: "\\mp" },
    { str: "\\neq", cmd: "\\neq" },
    { str: "\\sim", cmd: "\\sim" },
    { str: "\\nsim", cmd: "\\nsim" },
    { str: "\\simeq", cmd: "\\simeq" },
    { str: "\\not\\simeq", cmd: "\\not\\simeq" },
    { str: "\\cong", cmd: "\\cong" },
    { str: "\\ncong", cmd: "\\ncong" },
    { str: "\\fallingdotseq", cmd: "\\fallingdotseq" },
    { str: "\\risingdotseq", cmd: "\\risingdotseq" },
    { str: "\\equiv", cmd: "\\equiv" },
    { str: "\\not\\equiv", cmd: "\\not\\equiv" },
    { str: "\\eqsim", cmd: "\\eqsim" },
    { str: "\\thicksim", cmd: "\\thicksim" },
    { str: "\\backsim", cmd: "\\backsim" },
    { str: "\\backsimeq", cmd: "\\backsimeq" },

    { str: ">", cmd: ">" },
    { str: "<", cmd: "<" },
    { str: "\\geq", cmd: "\\geq" },
    { str: "\\geqq", cmd: "\\geqq" },
    { str: "\\leq", cmd: "\\leq" },
    { str: "\\leqq", cmd: "\\leqq" },
    { str: "\\gg", cmd: "\\gg" },
    { str: "\\ll", cmd: "\\ll" },
    { str: "\\oplus", cmd: "\\oplus" },
    { str: "\\ominus", cmd: "\\ominus" },
    { str: "\\otimes", cmd: "\\otimes" },
    { str: "\\odot", cmd: "\\odot" },
    { str: "\\uplus", cmd: "\\uplus" },
    { str: "\\sqcup", cmd: "\\sqcup" },
    { str: "\\vee", cmd: "\\vee" },
    { str: "\\wedge", cmd: "\\wedge" },
    { str: "\\oslash", cmd: "\\oslash" },
    { str: "\\circ", cmd: "\\circ" },
    { str: "\\cdot", cmd: "\\cdot" },
    { str: "\\cdots", cmd: "\\cdots" },
    { str: "\\bullet", cmd: "\\bullet" },
    { str: "\\in", cmd: "\\in" },
    { str: "\\ni", cmd: "\\ni" },
    { str: "\\notin", cmd: "\\notin" },
    { str: "\\subset", cmd: "\\subset" },
    { str: "\\supset", cmd: "\\supset" },
    { str: "\\subseteq", cmd: "\\subseteq" },
    { str: "\\supseteq", cmd: "\\supseteq" },
    { str: "\\cap", cmd: "\\cap" },
    { str: "\\cup", cmd: "\\cup" },
    { str: "\\emptyset", cmd: "\\emptyset" },
    { str: "\\infty", cmd: "\\infty" },
    { str: "\\nabla", cmd: "\\nabla" },
    { str: "\\partial", cmd: "\\partial" },

    { str: "\\lhd", cmd: "\\lhd" },
    { str: "\\rhd", cmd: "\\rhd" },
    { str: "\\ltimes", cmd: "\\ltimes" },
    { str: "\\rtimes", cmd: "\\rtimes" },
    { str: "\\top", cmd: "\\top" },
    { str: "\\perp", cmd: "\\perp" },
    { str: "\\vdash", cmd: "\\vdash" },
    { str: "\\dashv", cmd: "\\dashv" },
    { str: "\\Vdash", cmd: "\\Vdash" },
    { str: "\\vDash", cmd: "\\vDash" },
    { str: "\\models", cmd: "\\models" },
    { str: "\\doteq", cmd: "\\doteq" },
    { str: "\\asymp", cmd: "\\asymp" },
    { str: "\\approx", cmd: "\\approx" },
    { str: "\\thickapprox", cmd: "\\thickapprox" },
    { str: "\\approxeq", cmd: "\\approxeq" },
    { str: "\\propto", cmd: "\\propto" },
    { str: "\\varpropto", cmd: "\\varpropto" },
    { str: "\\bowtie", cmd: "\\bowtie" },
    { str: "\\fallingdotseq", cmd: "\\fallingdotseq" },
    { str: "\\risingdotseq", cmd: "\\risingdotseq" },
    { str: "\\mid", cmd: "\\mid" },
    { str: "\\nmid", cmd: "\\nmid" },
    { str: "\\parallel", cmd: "\\parallel" },
    { str: "\\nparallel", cmd: "\\nparallel" },
    { str: "\\prec", cmd: "\\prec" },
    { str: "\\succ", cmd: "\\succ" },
    { str: "\\preceq", cmd: "\\preceq" },
    { str: "\\succeq", cmd: "\\succeq" },
    { str: "\\precsim", cmd: "\\precsim" },
    { str: "\\succsim", cmd: "\\succsim" },
    { str: "\\curlyeqprec", cmd: "\\curlyeqsucc" },
    { str: "\\preccurlyeq", cmd: "\\succcurlyeq" },
    { str: "\\precnsim", cmd: "\\succnsim" },
    { str: "\\precneqq", cmd: "\\succneqq" },
    { str: "\\precnapprox", cmd: "\\precnapprox" },
    { str: "\\succnapprox", cmd: "\\succnapprox" },
    { str: "\\precapprox", cmd: "\\precapprox" },
    { str: "\\succapprox", cmd: "\\succapprox" },

    { str: "A", cmd: "A" },
    { str: "\\alpha", cmd: "\\alpha" },
    { str: "B", cmd: "B" },
    { str: "\\beta", cmd: "\\beta" },
    { str: "\\Gamma", cmd: "\\Gamma" },
    { str: "\\gamma", cmd: "\\gamma" },
    { str: "\\Delta", cmd: "\\Delta" },
    { str: "\\delta", cmd: "\\delta" },
    { str: "E", cmd: "E" },
    { str: "\\epsilon", cmd: "\\epsilon" },
    { str: "Z", cmd: "Z" },
    { str: "\\zeta", cmd: "\\zeta" },
    { str: "H", cmd: "H" },
    { str: "\\eta", cmd: "\\eta" },
    { str: "\\Theta", cmd: "\\Theta" },
    { str: "\\theta", cmd: "\\theta" },
    { str: "I", cmd: "I" },
    { str: "\\iota", cmd: "\\iota" },
    { str: "K", cmd: "K" },
    { str: "\\kappa", cmd: "\\kappa" },
    { str: "\\Lambda", cmd: "\\Lambda" },
    { str: "\\lambda", cmd: "\\lambda" },
    { str: "M", cmd: "M" },
    { str: "\\mu", cmd: "\\mu" },
    { str: "N", cmd: "N" },
    { str: "\\nu", cmd: "\\nu" },
    { str: "\\Xi", cmd: "\\Xi" },
    { str: "\\xi", cmd: "\\xi" },
    { str: "O", cmd: "O" },
    { str: "o", cmd: "o" },
    { str: "\\Pi", cmd: "\\Pi" },
    { str: "\\pi", cmd: "\\pi" },
    { str: "P", cmd: "P" },
    { str: "\\rho", cmd: "\\rho" },
    { str: "\\Sigma", cmd: "\\Sigma" },
    { str: "\\sigma", cmd: "\\sigma" },
    { str: "T", cmd: "T" },
    { str: "\\tau", cmd: "\\tau" },
    { str: "\\upsilon", cmd: "\\upsilon" },
    { str: "\\upsilon", cmd: "\\upsilon" },
    { str: "\\Phi", cmd: "\\Phi" },
    { str: "\\phi", cmd: "\\phi" },
    { str: "X", cmd: "X" },
    { str: "\\chi", cmd: "\\chi" },
    { str: "\\Psi", cmd: "\\Psi" },
    { str: "\\psi", cmd: "\\psi" },
    { str: "\\Omega", cmd: "\\Omega" },
    { str: "\\omega", cmd: "\\omega" },
    { str: "\\varepsilon", cmd: "\\varepsilon" },
    { str: "\\vartheta", cmd: "\\vartheta" },
    { str: "\\varrho", cmd: "\\varrho" },
    { str: "\\varsigma", cmd: "\\varsigma" },
    { str: "\\varphi", cmd: "\\varphi" },
    { str: "\\arg", cmd: "\\arg" },
    { str: "\\deg", cmd: "\\deg" },
    { str: "\\dim", cmd: "\\dim" },
    { str: "\\ker", cmd: "\\ker" },
    { str: "\\hom", cmd: "\\hom" },
    { str: "\\aleph", cmd: "\\aleph" },
    { str: "\\hbar", cmd: "\\hbar" },
    { str: "\\imath", cmd: "\\imath" },
    { str: "\\jmath", cmd: "\\jmath" },
    { str: "\\ell", cmd: "\\ell" },
    { str: "\\wp", cmd: "\\wp" },
    { str: "\\Re", cmd: "\\Re" },
    { str: "\\Im", cmd: "\\Im" },
    { str: "\\partial", cmd: "\\partial" },
    { str: "\\infty", cmd: "\\infty" },
    { str: "\\prime", cmd: "\\prime" },
    { str: "\\emptyset", cmd: "\\emptyset" },
    { str: "\\nabla", cmd: "\\nabla" },
    { str: "\\surd", cmd: "\\surd" },
    { str: "\\angle", cmd: "\\angle" },
    { str: "\\triangle", cmd: "\\triangle" },
    { str: "\\forall", cmd: "\\forall" },
    { str: "\\exists", cmd: "\\exists" },
    { str: "\\neg", cmd: "\\neg" },
    { str: "\\flat", cmd: "\\flat" },
    { str: "\\natural", cmd: "\\natural" },
    { str: "\\sharp", cmd: "\\sharp" },
    { str: "\\clubsuit", cmd: "\\clubsuit" },
    { str: "\\diamondsuit", cmd: "\\diamondsuit" },
    { str: "\\heartsuit", cmd: "\\heartsuit" },
    { str: "\\spadesuit", cmd: "\\spadesuit" },

    //option
    { str: "align", cmd: "\\begin{align}\n\\end{align}" },
    { str: "align*", cmd: "\\begin{align*}\n\\end{align*}" },
    { str: "alignat", cmd: "\\begin{alignat}\n\\end{alignat}" },
    { str: "alignat*", cmd: "\\begin{alignat*}\n\\end{alignat*}" },
    { str: "aligned", cmd: "\\begin{aligned}\n\\end{aligned}" },
    { str: "alignedat", cmd: "\\begin{alignedat}\n\\end{alignedat}" },
    { str: "array", cmd: "\\begin{array}\n\\end{array}" },
    { str: "bmatrix", cmd: "\\begin{bmatrix}\n\\end{bmatrix}" },
    { str: "Bmatrix", cmd: "\\begin{Bmatrix}\n\\end{Bmatrix}" },
    { str: "bmatrix*", cmd: "\\begin{bmatrix*}\n\\end{bmatrix*}" },
    { str: "Bmatrix*", cmd: "\\begin{Bmatrix*}\n\\end{Bmatrix*}" },
    { str: "bsmallmatrix", cmd: "\\begin{bsmallmatrix}\n\\end{bsmallmatrix}" },
    { str: "Bsmallmatrix", cmd: "\\begin{Bsmallmatrix}\n\\end{Bsmallmatrix}" },
    { str: "bsmallmatrix*", cmd: "\\begin{bsmallmatrix*}\n\\end{bsmallmatrix*}" },
    { str: "Bsmallmatrix*", cmd: "\\begin{Bsmallmatrix*}\n\\end{Bsmallmatrix*}" },
    { str: "cases", cmd: "\\begin{cases}\n\\end{cases}" },
    { str: "cases*", cmd: "\\begin{cases*}\n\\end{cases*}" },
    { str: "CD", cmd: "\\begin{CD}\n\\end{CD}" },
    { str: "crampedsubarray", cmd: "\\begin{crampedsubarray}\n\\end{crampedsubarray}" },
    { str: "dcases", cmd: "\\begin{dcases}\n\\end{dcases}" },
    { str: "dcases*", cmd: "\\begin{dcases*}\n\\end{dcases*}" },
    { str: "drcases", cmd: "\\begin{drcases}\n\\end{drcases}" },
    { str: "drcases*", cmd: "\\begin{drcases*}\n\\end{drcases*}" },
    { str: "empheq", cmd: "\\begin{empheq}\n\\end{empheq}" },
    { str: "eqnarray", cmd: "\\begin{eqnarray}\n\\end{eqnarray}" },
    { str: "eqnarray*", cmd: "\\begin{eqnarray*}\n\\end{eqnarray*}" },
    { str: "equation", cmd: "\\begin{equation}\n\\end{equation}" },
    { str: "equation*", cmd: "\\begin{equation*}\n\\end{equation*}" },
    { str: "flalign", cmd: "\\begin{flalign}\n\\end{flalign}" },
    { str: "flalign*", cmd: "\\begin{flalign*}\n\\end{flalign*}" },
    { str: "gather", cmd: "\\begin{gather}\n\\end{gather}" },
    { str: "gather*", cmd: "\\begin{gather*}\n\\end{gather*}" },
    { str: "gathered", cmd: "\\begin{gathered}\n\\end{gathered}" },
    { str: "lgathered", cmd: "\\begin{lgathered}\n\\end{lgathered}" },
    { str: "matrix", cmd: "\\begin{matrix}\n\\end{matrix}" },
    { str: "matrix*", cmd: "\\begin{matrix*}\n\\end{matrix*}" },
    { str: "multline", cmd: "\\begin{multline}\n\\end{multline}" },
    { str: "multline*", cmd: "\\begin{multline*}\n\\end{multline*}" },
    { str: "multlined", cmd: "\\begin{multlined}\n\\end{multlined}" },
    { str: "numcases", cmd: "\\begin{numcases}\n\\end{numcases}" },
    { str: "pmatrix", cmd: "\\begin{pmatrix}\n\\end{pmatrix}" },
    { str: "pmatrix*", cmd: "\\begin{pmatrix*}\n\\end{pmatrix*}" },
    { str: "prooftree", cmd: "\\begin{prooftree}\n\\end{prooftree}" },
    { str: "psmallmatrix", cmd: "\\begin{psmallmatrix}\n\\end{psmallmatrix}" },
    { str: "psmallmatrix*", cmd: "\\begin{psmallmatrix*}\n\\end{psmallmatrix*}" },
    { str: "rcases", cmd: "\\begin{rcases}\n\\end{rcases}" },
    { str: "rcases*", cmd: "\\begin{rcases*}\n\\end{rcases*}" },
    { str: "rgathered", cmd: "\\begin{rgathered}\n\\end{rgathered}" },
    { str: "smallmatrix", cmd: "\\begin{smallmatrix}\n\\end{smallmatrix}" },
    { str: "smallmatrix*", cmd: "\\begin{smallmatrix*}\n\\end{smallmatrix*}" },
    { str: "split", cmd: "\\begin{split}\n\\end{split}" },
    { str: "spreadlines", cmd: "\\begin{spreadlines}\n\\end{spreadlines}" },
    { str: "subarray", cmd: "\\begin{subarray}\n\\end{subarray}" },
    { str: "subnumcases", cmd: "\\begin{subnumcases}\n\\end{subnumcases}" },
    { str: "vmatrix", cmd: "\\begin{vmatrix}\n\\end{vmatrix}" },
    { str: "Vmatrix", cmd: "\\begin{Vmatrix}\n\\end{Vmatrix}" },
    { str: "vmatrix*", cmd: "\\begin{vmatrix*}\n\\end{vmatrix*}" },
    { str: "Vmatrix*", cmd: "\\begin{Vmatrix*}\n\\end{Vmatrix*}" },
    { str: "vsmallmatrix", cmd: "\\begin{vsmallmatrix}\n\\end{vsmallmatrix}" },
    { str: "Vsmallmatrix", cmd: "\\begin{Vsmallmatrix}\n\\end{Vsmallmatrix}" },
    { str: "vsmallmatrix*", cmd: "\\begin{vsmallmatrix*}\n\\end{vsmallmatrix*}" },
    { str: "Vsmallmatrix*", cmd: "\\begin{Vsmallmatrix*}\n\\end{Vsmallmatrix*}" },
    { str: "xalignat", cmd: "\\begin{xalignat}\n\\end{xalignat}" },
    { str: "xalignat*", cmd: "\\begin{xalignat*}\n\\end{xalignat*}" },
    { str: "xxalignat", cmd: "\\begin{xxalignat}\n\\end{xxalignat}" },

    { str: "\\dots", cmd: "\\dots" },
    { str: "\\vdots", cmd: "\\vdots" },
    { str: "\\ddots", cmd: "\\ddots" },
    { str: "def-iddots", cmd: "\\def\\iddots{{\\kern3mu\\raise1mu{.}\\kern3mu\\raise6mu{.}\\kern3mu\\raise12mu{.}}}" },
    { str: "macro", cmd: "\\def\\{}" },
    { str: "new-cmd", cmd: "\\newcommand\\[]{}" },
    { str: "/", cmd: "/" },
    { str: "\\backslash", cmd: "\\backslash" },
    { str: "\\diagdown", cmd: "\\diagdown" },
    { str: "\\diagup", cmd: "\\diagup" },
    { str: "\\llcorner", cmd: "\\llcorner" },
    { str: "\\lrcorner", cmd: "\\lrcorner" },
    { str: "\\ulcorner", cmd: "\\ulcorner" },
    { str: "\\urcorner", cmd: "\\urcorner" },
    { str: "\\to", cmd: "\\to" },
    { str: "\\leftarrow", cmd: "\\leftarrow" },
    { str: "\\longleftarrow", cmd: "\\longleftarrow" },
    { str: "\\rightarrow", cmd: "\\rightarrow" },
    { str: "\\longrightarrow", cmd: "\\longrightarrow" },
    { str: "\\uparrow", cmd: "\\uparrow" },
    { str: "\\downarrow", cmd: "\\downarrow" },
    { str: "\\leftrightarrow", cmd: "\\leftrightarrow" },
    { str: "\\longleftrightarrow", cmd: "\\longleftrightarrow" },
    { str: "\\updownarrow", cmd: "\\updownarrow" },
    { str: "\\Leftarrow", cmd: "\\Leftarrow" },
    { str: "\\Longleftarrow", cmd: "\\Longleftarrow" },
    { str: "\\Rightarrow", cmd: "\\Rightarrow" },
    { str: "\\Longrightarrow", cmd: "\\Longrightarrow" },
    { str: "\\Uparrow", cmd: "\\Uparrow" },
    { str: "\\Downarrow", cmd: "\\Downarrow" },
    { str: "\\Leftrightarrow", cmd: "\\Leftrightarrow" },
    { str: "\\Longleftrightarrow", cmd: "\\Longleftrightarrow" },
    { str: "\\Updownarrow", cmd: "\\Updownarrow" },
    { str: "\\nearrow", cmd: "\\nearrow" },
    { str: "\\searrow", cmd: "\\searrow" },
    { str: "\\nwarrow", cmd: "\\nwarrow" },
    { str: "\\swarrow", cmd: "\\swarrow" },
    { str: "\\mapsto", cmd: "\\mapsto" },
    { str: "\\longmapsto", cmd: "\\longmapsto" },
    { str: "\\circlearrowright", cmd: "\\circlearrowright" },
    { str: "\\circlearrowleft", cmd: "\\circlearrowleft" },
    { str: "\\lbrack", cmd: "\\lbrack" },
    { str: "\\rbrack", cmd: "\\rbrack" },
    { str: "\\lceil", cmd: "\\lceil" },
    { str: "\\rfloor", cmd: "\\rfloor" },
    { str: "\\lfloor", cmd: "\\lfloor" },
    { str: "\\rceil", cmd: "\\rceil" },
    { str: "\\lbrace", cmd: "\\lbrace" },
    { str: "\\rbrace", cmd: "\\rbrace" },
    { str: "\\langle", cmd: "\\langle" },
    { str: "\\rangle", cmd: "\\rangle" },

    { str: "\\left\\{auto\\right\\}", cmd: "\\left\\{\\right\\}" },
    { str: "\\Bigg(", cmd: "\\Bigg(" },
    { str: "\\bigg(", cmd: "\\bigg(" },
    { str: "\\Big(", cmd: "\\Big(" },
    { str: "\\big(", cmd: "\\big(" },
    { str: "\\Bigg)", cmd: "\\Bigg)" },
    { str: "\\bigg)", cmd: "\\bigg)" },
    { str: "\\Big)", cmd: "\\Big)" },
    { str: "\\big)", cmd: "\\big)" },
    { str: "\\begin{array}{|c|c|c}\\hline a&b&c\\\\\\hline d&e&f\\\\\\hline g&h&i\\\\\\end{array}",
      cmd: "\\begin{array}{|c|c|c}\n\\hline\na&b&c\\\\\n\\hline\nd&e&f\\\\\n\\hline\ng&h&i\\\\\n\\end{array}" },
    { str: "\\left\\{\\begin{align}a\\\\b\\\\c\\end{align}\\right.", cmd: "\\left\\{\n\\right." },
    { str: "\\Huge{1}", cmd: "\\Huge{}" },
    { str: "\\huge{2}", cmd: "\\huge{}" },
    { str: "\\LARGE{3}", cmd: "\\LARGE{}" },
    { str: "\\Large{4}", cmd: "\\Large{}" },
    { str: "\\large{5}", cmd: "\\large{}" },
    { str: "\\normalsize{6}", cmd: "\\normalsize{}" },
    { str: "\\small{7}", cmd: "\\small{}" },
    { str: "\\scriptsize{8}", cmd: "\\scriptsize{}" },
    { str: "\\tiny{9}", cmd: "\\tiny{}" },
  ]

  constructor(parentElement, style, id, type, editor) {
    super(parentElement, style, id, type)
    this.editor = editor

    this.add_setting(
      "file output: " +
      '<input type="text" value="sample.png" placeholder="filename.filetype" ' +
      'spellcheck="false" class="w17" />' +
      '<input type="button" value="download" />',
      (co) => { co.childNodes[2].addEventListener("click", () => {
        let ele = document.createElement("a")
        ele.download = co.childNodes[1].value
        let type = ele.download.replace(/[^\.]*\.(.*)/gu, "$1")
        let str = this.editor.obj.innerText.replace(/(?<!.)\n\n/gu, "\n")
        if (type === "txt") {
          ele.href = "data:text/plain;charset=utf-8;," + encodeURIComponent(str)
          ele.click()
        }
        else {
          MathJax.tex2svgPromise(str, {display: true}).then((obj) => {
            let svg = new XMLSerializer().serializeToString(obj.childNodes[0])
            let svg_url = "data:image/svg+xml;charset=utf-8;," + encodeURIComponent(svg)
            if(type === "svg") {
              ele.href = svg_url
              ele.click()
            }
            else {
              let cvs = document.createElement("canvas")
              let img = new Image()
              img.src = svg_url
              img.onload = () => {
                cvs.width = img.width
                cvs.height = img.height
                cvs.getContext("2d").drawImage(img, 0, 0)
                ele.href = cvs.toDataURL("image/" + type)
                ele.click()
              }
            }
          })
        }
      })}
    )

    this.add_setting(
      "tab size: " +
      '<input type="range" min="0" max="50" step="1" value="4"/>' +
      " " +
      '<input type="number" min="0" max="50" step="1" value="4" />',
      (ele) => {
        let range = ele.childNodes[1]
        let num = ele.childNodes[3]
        range.addEventListener("input", () => {
          num.value = range.value
          document.documentElement.style.setProperty("--tab-size", Number(range.value))
        })
        num.addEventListener("input", () => {
          range.value = num.value
          document.documentElement.style.setProperty("--tab-size", Number(num.value))
        })
      }
    )

    this.add_setting(
      "org cmd: " +
      '<input type="text" value="" ' +
      'placeholder="[&quot;name&quot,&quot;cmd&quot;]" ' +
      'spellcheck="false" class="w14" />' +
      '<input type="button" value="add" />',
      (ele) => { ele.childNodes[2].addEventListener("click", () => {
        let obj = JSON.parse(ele.childNodes[1].value)
        this.add_button(obj[0], obj[1])
        MathJax.typesetPromise(this.obj.childList)
      })}
    )

    for (let i = 0; i < this.list.length; i++) {
      this.add_button("\\(" + this.list[i].str + "\\)", this.list[i].cmd)
    }

    MathJax.typesetPromise(this.obj.childList)
  }

  add_setting(html, efunc) {
    let co = document.createElement("p")
    co.innerHTML = html
    this.obj.appendChild(co)
    efunc(co)
  }

  add_button(print_text, add_text) {
    let co = document.createElement("p")
    co.innerHTML = print_text
    this.obj.appendChild(co)
    co.addEventListener("click", () => { this.editor.reform(add_text) })
  }
}

