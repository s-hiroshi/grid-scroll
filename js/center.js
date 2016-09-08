jQuery(function ($) {
	/**
	 * Centerオブジェクト
	 *
	 * 親要素に対して要素を中央へ配置します。
	 *
	 * @class Common
	 */
	InfoTown.Center = (function () {
		/**
		 *  中央配置
		 *
		 *  要素を親要素の中央へ配置します。
		 *
		 *  @method center
		 *  @public
		 *  @param {jQuery} elem 中央配置するjQueryオブジェクトです。
		 */
		function center(elem) {
			var width, height, parentWidth, parentHeight, parentCssPos, offsetX, offsetY;

			elem = (elem instanceof jQuery) ? elem : $(elem);

			width = elem.width();
			height = elem.height();

			/* 要素親のサイズとpositionプロパティ設定 */
			if (elem.parent().get(0) === $('body').get(0)) {
				parentWidth = $(window).width();
				parentHeight = $(window).height();
			} else {
				parentWidth = elem.parent().width();
				parentHeight = elem.parent().height();
				parentCssPos = elem.parent().css('position');
				if ((parentCssPos !== 'absolute') && (parentCssPos !== 'relative')) {
					elem.parent().css({
						position: 'relative'
					});
				}

			}
			/* オフセット */
			offsetX = (parentWidth - width) / 2;
			offsetY = (parentHeight - height) / 2;
			elem.css({
				position: 'absolute',
				top: offsetY,
				left: offsetX
			});
		}

		/* パブリックメソッド */
		return {
			scroll: scroll,
			center: center
		};
	})();

});