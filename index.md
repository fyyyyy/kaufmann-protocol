<script src="https://unpkg.com/vue"></script>
<!-- <link rel="stylesheet" href="dark.css"> -->
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/pure-min.css" integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47" crossorigin="anonymous">
<div id="app">
  <div class="sidebar pure-u-1 pure-u-md-1-4">
    <div class="header">
      <h1 class="brand-title">Kaufmann Kalkulator</h1>
      <h3 class="brand-title">
        Version 0.2
        <a href="https://www.kaufmannprotocol.com/" target="_blank">Vist Kaufmann Protocol</a>
      </h3>
    </div>
  </div>
  <table class="pure-table">
    <tr class="header">
      <th>Substance</th>
      <th v-for="ten in teneds">{{ten}}</th>
      <th class="plus">Pros</th>
      <th class="side">Cons</th>
    </tr>
    <tr v-for="med in meds" v-bind:class="{ active: med.selected }">
      <td style="min-width: 15em;">
        <button class="pure-button-small" v-bind:class="{'pure-button-primary': med.selected}" v-on:click="select(med)">
          {{ med.name }}
        </button>
      </td>
      <td v-for="s in med.score">
        {{s}}
      </td>
      <td class="dose">{{med.pros}}</td>
      <td class="dose">{{med.cons}}</td>
    </tr>
  </table>

  <br>
  <br>

  <table class="pure-table results" v-if="selected.length">
    <tr>
    <th></th>
      <th v-for="ten in teneds">{{ten}}</th>
      <th class="dose">DOSE</th>
    </tr>
    <tr v-for="med in selected">
      <td style="min-width: 15em;">{{ med.name }}</td>
      <td v-for="s in med.score">
        {{s}}
      </td>
      <td class="dose">{{med.dose}}</td>
    </tr>
    <tr class="score">
      <td>Your Total <b>{{ total() }}</b></td>
      <td v-for="t in score()">
        <b v-bind:class="{ low: t < 2, high: t > 6 }">{{ t }}</b>
      </td>
      <td></td>
    </tr>
    

  </table>
</div>

<script src="app.js"></script>
