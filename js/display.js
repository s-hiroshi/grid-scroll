jQuery(function ($) {
	/**
	 * スクロール処理
	 *
	 * @class Display
	 */
	InfoTown.Display = (function () {
		/**
		 * コンテンツ表示/非表示
		 *
		 * @methoc .open--more.click
		 * @public
		 */
		$(".open-more").bind("click", function () {
			var eventBlock, openBlock, loading, loadingBlock;
			/* イベント発生オブジェクト */
			eventBlock = $(this).parents(".block");
			/* RESTデータ出力row */
			openBlock = eventBlock.next(".block--more");
			/* ローディング処理 */
			loading = $('<i style="color: #555" class="fa fa-spinner fa-pulse fa-2x"></i>');
			loadingBlock = $(this).parents(".block");
			loading.appendTo(loadingBlock);
			InfoTown.Center.center(loading);
			/* ローティングオブジェクト削除 */
			loading.remove();
			/* コンテンツ表示 */
			openBlock.slideDown(1000, function () {
				InfoTown.Scroll.scroll({target: $(this), speed: 1000});
			});
			/* コンテンツ非表示 */
			$(".close-more", openBlock).bind('click', function () {
				$(openBlock).slideUp(1000, function () {
					InfoTown.Scroll.scroll({target: eventBlock, speed: 1000});
				});
			});
			return false;
		});
	}());
});