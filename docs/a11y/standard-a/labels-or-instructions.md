# 3.3.2 ラベル又は説明

## 達成基準
コンテンツが利用者の入力を要求する場合は、ラベル又は説明文が提供されている。
## 達成方法
- **以下のトグルリスト内のいずれかを用いて、説明的なラベルを提供する**
::: details
- ユーザインターフェースコントロールに対する説明ラベルを提供するために、`aria-describedby`プロパティを使用する
- 複数のテキストノードをつなげて一つのラベルにするために、`aria-labelledby`を使用する
- 関連するフォームコントロールを特定するために、グルーピングロールを使用する
- 期待されるデータ書式及び入力例を提供する
- フォーム又はテキストフィールド一式の先頭に、必須の入力を記述するテキストの説明を提供する
- 関係性を最大限に予測できるようにするためにラベルを配置する
- 入力が完了していない必須項目を特定するために、テキストの説明を提供する
- `label`要素又は`legend`要素を使用して、必須のフォームコントロールを明示する
:::
- テキストラベルとフォームコントロールを関連付けるために、`label`要素を使用する
- `fieldset`要素及び`legend`要素を使用して、フォームコントロールのグループに関する説明を提供する
- `label`要素を使用できない場合に、フォームコントロールを特定するために、`title`属性を使用する
- テキストフィールドの目的をラベル付けするために隣接するボタンを用いる
	（注記： この達成方法は、「最後の手段」として考え、その他の達成方法をページに適用することができないときだけに用いるべきである。より広範囲の利用者層にとってのアクセシビリティを向上させるという意味でも、この達成方法以外の達成方法を推奨する。）

## 実装ガイドライン
- ユーザーが入力するフォームについては、`label`要素を利用し、フォームコントロールとラベルを明示的に関連付ける
```HTML
<label for="firstname">First name:</label> 
<input type="text" name="firstname" id="firstname" />
```

## 参考
[達成基準 3.3.2 を理解する | WCAG 2.0解説書](https://waic.jp/docs/UNDERSTANDING-WCAG20/minimize-error-cues.html)