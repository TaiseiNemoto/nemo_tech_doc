# 2.4.3 フォーカス順序

## 達成基準
ウェブページが順を追ってナビゲートできて、そのナビゲーション順が意味又は操作に影響を及ぼす場合、フォーカス可能なコンポーネントは、意味及び操作性を損なわない順序でフォーカスを受け取る。
## 達成方法
- コンテンツ内の順番及び関係に従った順序で、インタラクティブな要素を配置する
- **次の達成方法の一つを用いて、コンテンツ内の順序及び関係性に従った順序でフォーカスを要素に与える**
    - リンク、フォームコントロール、及びオブジェクトを通して、論理的なタブ順序を作成する
    - DOM の順序を表示順序と一致させる
- **次の達成方法の一つを用いて、ウェブページを動的に変化させる**
    - 動的なコンテンツを、Document Object Modelの、そのトリガーとなる要素の直後に挿入する
    - デバイス非依存な方法でカスタムダイアログを作成する
    - Document Object Modelを用いて、ページ上にある複数のセクションを並び替える
		

## 実装ガイドライン
- キー要素でフォーカス可能な要素が、適切な順序でフォーカスを受け取る事ができるようにする。

## 参考
[達成基準 2.4.3 を理解する | WCAG 2.0解説書](https://waic.jp/docs/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)