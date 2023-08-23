# 1.3.1 情報及び関係性

## 達成基準
何らかの形で提示されている情報、 構造、及び関係性は、プログラムによる解釈が可能である、又はテキストで提供されている。
## 達成方法
### ウェブコンテンツ技術が、表現によって伝えている情報及び関係性をプログラムが解釈可能にするセマンテックな構造を提供している場合
- ページのリージョンを特定するために ARIAランドマークを使用する
- 見出しを特定するために`role=heading`を使用する
- リージョンとランドマークに名前 (name) を付けるために、`aria-labelledby`を使用する
- ユーザインターフェース コントロールの名前 (name) を提供するために、`aria-labelledby`を使用する
- 関連するフォームコントロールを特定するために、グルーピングロールを使用する
- ページのリージョンを特定するために`region`ロールを使用する
- 構造をマークアップするために、セマンティックな要素を使用する、かつ、強調又は特別なテキストをマークアップするために、セマンティックなマークアップを使用する 
- テキストの提示のバリエーションによって伝えている情報を伝達するために、テキストを使用する
- 異なる提示を可能にするために、情報と構造を表現から分離する
- **表現によって伝えられている情報及び関係性をプログラムが解釈できるようにする。次に上げるいずれかを用いる**
::: details 
  - 色の手がかりを用いるときは必ず、セマンティックなマークアップを使用する
  - 表形式の情報を提示するために、テーブルのマークアップを使用する
  - データテーブルのキャプションとデータテーブルを関連付けるために、`caption`要素を使用する
  - データテーブルの概要を提供するために、`table`要素の`summary`属性を使用する
  - データテーブルで見出しセルとデータセルを関連付けるために、`scope`属性を使用する
  - データテーブルのデータセルを見出しセルと関連付けるために、`id`属性及び`headers`属性を使用する
  - テキストラベルとフォームコントロールを関連付けるために、`label`要素を使用する
  - `label`要素を使用できない場合に、フォームコントロールを特定するために、`title`属性を使用する
  - `fieldset`要素及び`legend`要素を使用して、フォームコントロールのグループに関する説明を提供する
  - `select`要素内の`option`要素をグループ化するために、`optgroup`要素を使用する
  - リスト又はリンクのグループに、`ol`要素、`ul`要素、`dl`要素を用いる
  - 見出しを特定するために、`h1`要素～`h6`要素を使用する
  - ページにコンテンツを追加するために、Document Object Model (DOM) の機能を使用する
  - `nav`要素を使用して、関連したリンクをグループ化する
:::

### ウェブコンテンツ技術が、表現によって伝えている情報及び関係性をプログラムが解釈可能にするセマンテックな構造を提供していない場合
- テキストの提示のバリエーションによって伝えている情報を伝達するために、テキストを使用する
- 表現によって伝えられている情報及び関係性をプログラムが解釈可能にする、又は次の達成方法を用いてテキストで入手可能にする
  - 段落に、標準的なテキストの書式の表現法を使用する
  - リストに、標準的なテキストの書式の表現法を使用する
  - 見出しに、標準的なテキストの書式の表現法を使用する

## 実装ガイドライン
- `header`, `main`, `nav`, `footer`等の要素を適切に利用する。または、これらが`role`属性で明示されている。
`role="search"`については、対応するHTML要素がないので、明確に意味づけするのであれば`role="search"`が必要。
```HTML
<header></header>   // ページのヘッダー領域（ページ内に1つ）
<footer></footer>   // ページのフッター領域（ページ内に1つ）
<main></main>       // メインコンテンツ領域（ページ内に1つ）
<aside></aside>     //補足のコンテンツ（サイドバー等）
<nav></nav>         //ナビゲーション
<section></section> //汎用的なランドマーク
<form></form>       //フォーム

<form role="search"></form>
```
- リスト又はリンクのグループに、`ul`、`ol`、`dl`を用いる。
```HTML
<ol>
  <li>Mix eggs and milk in a bowl.</li>
</ol>

<ul>
  <li>Milk</li>
</ul>

<dl>
  <dt>blink</dt>
  <dd>turn on and off between .5 and 3 times per second
  </dd>
</dl> 
```

- `h1`～`h6`要素を使い、コンテンツの見出しをセマンティックにする。
```HTML
<h1>Plant Foods that Humans Eat</h1>
<p>There are an abundant number of plants that humans eat...</p>
```

- テキストラベルとフォームコントロールを関連付けるために、`label`要素を使用する
```HTML
<label for="firstname">First name:</label> 
<input type="text" name="firstname" id="firstname" />
```
- `label`要素を使用できない場合は`title`属性を利用する
```HTML
<input type="text" title="Type search term here"/> <input type="submit" value="Search"/>
```

- 表は`table`要素を使い、マークアップする

```HTML
 <table>
  <tr>
    <td>Name</td>
    <td>Age</td>
  </tr>
  <tr>
    <td>Gabriel</td>
    <td>13</td>
  </tr>
</table> 
```

## 参考
[達成基準 1.3.1 を理解する | WCAG 2.0解説書](https://waic.jp/docs/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)<br>
[HTML 表の高度な機能とアクセシビリティ - ウェブ開発を学ぶ | MDN](https://developer.mozilla.org/ja/docs/Learn/HTML/Tables/Advanced)