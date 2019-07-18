<template>
  <div class="view-page cf">

    <header>
      <h2>Language</h2>
    </header>

    <div class="section">
      <p>The official language of the country is Polish, and around 38.5 million people in Poland speak it (as well as it being spoken as a second language in several nearby countries).</p>

      <p>A Slavic language, the Polish alphabet has 9 additional letters to those used in the basic Latin alphabet, making a total of 33. It is the second most spoken Slavic language after Russian, and some of its vocabulary is shared with the languages of other neighbouring Slavic countries – Czech, Slovak, Belarusian, and Ukrainian.</p>

      <p>There are a number of officially recognised minority languages that are spoken in Poland; Belarusian, Czech, Lithuanian, German, Slovak, Russian, Ukrainian Armenian, Hebrew, and Yiddish, and there is also one regional language; Kashubian English is the most common foreign language spoken in Poland.</p>
    </div>

    <div class="section pronunciation-guide">
			<p>
				<strong>Pronunciation guide</strong><br>
				<p>a	A	[a]	 praca	as in English <strong>s</strong>mart</p>
				<p>ą	Ą	[ɔ̃]	 mąż	as in French b<strong>on</strong></p>
				<p>b	B	[b]	 niebo	as in English <strong>b</strong>oy</p>
				<p>c	C	[t͡s]	 co	as in English wi<strong>ts</strong></p>
				<p>ć	Ć	[t̠͡ɕ]	 być	as in English <strong>c</strong>hoice</p>
				<p>d	D	[d]	 daleko	as in English <strong>d</strong>ay</p>
				<p>e	E	[ɛ]	 też	as in English r<strong>e</strong>d</p>
				<p>ę	Ę	[ɛ̃]	 imię	as in French cousin<br></p>
				<p>f	F	[f]	 film	as in English <strong>f</strong>it</p>
				<p>g	G	[g]	 gość	as in English <strong>g</strong>ood</p>
				<p>h	H	[x]	 herbata	between scottish lo<strong>ch</strong> and english <strong>h</strong>eart</p>
				<p>i	I	[i]	 iść	as in English ch<strong>ea</strong>t</p>
				<p>j	J	[j]	 jechać	as in English <strong>y</strong>es</p>
				<p>k	K	[k]	 kawa	as in English <strong>sc</strong>arce</p>
				<p>l	L	[l]	 lubić	as in English <strong>l</strong>amp</p>
				<p>ł	Ł	[w]	 miły	as in English <strong>w</strong>ater</p>
				<p>m	M	[m]	 most	as in English <strong>m</strong>ove</p>
				<p>n	N	[n]	 rano	as in English <strong>n</strong>ut</p>
				<p>ń	Ń	[ɲ]	 tańczyć	as in English ca<strong>ny</strong>on</p>
				<p>o	O	[ɔ]	 okno	as in English p<strong>o</strong>rt</p>
				<p>ó	Ó	[u]	 móc	as in English r<strong>oo</strong>t</p>
				<p>p	P	[p]	 przerwa	as in English <strong>p</strong>lace</p>
				<p>r	R	[r]	 robić	thrilled r, as in italian <strong>R</strong>oma</p>
				<p>s	S	[s]	 syn	as in English <strong>s</strong>alt</p>
				<p>ś	Ś	[ɕ]	 środa	as in English <strong>sh</strong>ort</p>
				<p>t	T	[t]	 teraz	as in English s<strong>t</strong>op</p>
				<p>u	U	[u]	 szukać	as in English r<strong>oo</strong>t</p>
				<p>w	W	[v]	 wolny	as in English <strong>v</strong>owel</p>
				<p>y	Y	[ɨ]	 czy	as in English s<strong>y</strong>llable</p>
				<p>z	Z	[z]	 zamek	as in English <strong>z</strong>oo</p>
				<p>ź	Ź	[ʑ]	 jeździć	as in English tea<strong>ch</strong></p>
				<p>ż	Ż	[ʐ]	 żona	as in English vi<strong>s</strong>ion</p>
			</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "polish-language"
}
</script>

<style lang="css" scoped>
.view-page {
  width: 90%;
  margin: 20px 5% 20px 3.5%;
  border-radius: 4px;
  background: rgba(255,255,255,.85);
}
.section {
  width: 80%;
  float: left;
  clear: both;
}
.section.pronunciation-guide {
  display: block;
}
.section.pronunciation-guide p {
  height: 10px;
  display: block;
}
</style>
