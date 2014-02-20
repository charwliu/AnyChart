goog.provide('anychart.Chart');

goog.require('anychart.elements.Background');
goog.require('anychart.elements.BaseWithBounds');
goog.require('anychart.elements.Title');
goog.require('anychart.utils.Margin');
goog.require('anychart.utils.Padding');
goog.require('anychart.utils.ZIndexedLayer');



/**
 * Базовый класс для всех чартов, в котором определены отступы, background и title.
 * @constructor
 * @extends {anychart.elements.BaseWithBounds}
 */
anychart.Chart = function() {
  //todo: этот суспенд можно заменить на флаг конкретно для чарта,если больше это нигде не понадобится.
  this.suspendInvalidationDispatching();
  goog.base(this);

  /**
   * @type {anychart.utils.ZIndexedLayer}
   * @protected
   */
  this.rootElement = null;

  /**
   * @type {anychart.elements.Background}
   * @private
   */
  this.background_ = null;

  /**
   * @type {anychart.utils.Margin}
   * @private
   */
  this.margin_ = null;

  /**
   * @type {anychart.elements.Title}
   * @private
   */
  this.title_ = null;

  /**
   * @type {anychart.utils.Padding}
   * @private
   */
  this.padding_ = null;


  this.bounds().set(0, 0, '100%', '100%');
  this.margin(10, 20, 10, 20);
  this.padding(10, 20, 10, 20);
  this.title('Chart title');
  this.invalidate(anychart.utils.ConsistencyState.APPEARANCE);
  this.resumeInvalidationDispatching(false);
};
goog.inherits(anychart.Chart, anychart.elements.BaseWithBounds);


/**
 * Supported consistency states. Adds APPEARANCE to BaseWithBounds states.
 * @type {number}
 */
anychart.Chart.prototype.SUPPORTED_CONSISTENCY_STATES =
    anychart.elements.BaseWithBounds.prototype.SUPPORTED_CONSISTENCY_STATES |
        anychart.utils.ConsistencyState.APPEARANCE |
        anychart.utils.ConsistencyState.BACKGROUND_APPEARANCE |
        anychart.utils.ConsistencyState.TITLE_APPEARANCE;


//----------------------------------------------------------------------------------------------------------------------
//
//  Margin.
//
//----------------------------------------------------------------------------------------------------------------------
/**
 * Getter for current chart margin.
 * @illustration <t>simple</t>
 * var margins = 20;
 * stage.rect(0, 0, stage.width(), stage.height()).fill('orange 0.1');
 * stage.text(stage.width() / 3, 0, 'margins');
 * //arrows
 * stage.path()
 *     .moveTo(stage.width() / 2, 0)
 *     .lineTo(stage.width() / 2, margins);
 * stage.triangleUp(stage.width() / 2, 3, 3);
 * stage.triangleDown(stage.width() / 2, margins - 3, 3);
 * stage.path()
 *     .moveTo(stage.width() / 2, stage.height() - margins)
 *     .lineTo(stage.width() / 2, stage.height());
 * stage.triangleUp(stage.width() / 2, stage.height() - margins + 3, 3);
 * stage.triangleDown(stage.width() / 2, stage.height() - 3, 3);
 * stage.path()
 *     .moveTo(0, stage.height() / 2)
 *     .lineTo(margins, stage.height() / 2);
 * stage.triangleUp(3, stage.height() / 2 + 5.5, 3).rotateByAnchor(-90, 'center');
 * stage.triangleDown(margins - 3, stage.height() / 2 + 4, 3).rotateByAnchor(-90, 'center');
 * stage.path()
 *     .moveTo(stage.width(), stage.height() / 2)
 *     .lineTo(stage.width() - margins, stage.height() / 2);
 * stage.triangleUp(stage.width() - margins + 3, stage.height() / 2 + 5.5, 3).rotateByAnchor(-90, 'center');
 * stage.triangleDown(stage.width() - 3, stage.height() / 2 + 4, 3).rotateByAnchor(-90, 'center');
 * //content area
 * stage.rect(margins, margins, stage.width() - 2 * margins, stage.height() - 2 * margins).fill('white 1');
 * stage.text(stage.width() / 4, stage.height() / 2 - margins, 'Chart Content Area').fontSize(21);
 * @return {anychart.utils.Margin} Current chart margin.
 *//**
 * Setter for chart margin in pixels by one value.<br/>
 * @example <t>listingOnly</t>
 * // all margins 15px
 * chart.margin(15);
 * // all margins 15px
 * chart.margin('15px');
 * // top and bottom 5px ,right and left 15px
 * chart.margin( new anychart.utils.Space(5,15) );
 * @param {(string|number|anychart.utils.Space)=} opt_value Value to set.
 * @return {anychart.Chart} Экземпляр класса {@link anychart.Chart} для цепочного вызова.
 *//**
 * Setter for chart margin in pixels by few numbers.<br/>
 * @example <t>listingOnly</t>
 * // 1) top and bottom 10px, left and right 15px
 * chart.margin(10, '15px');
 * // 2) top 10px, left and right 15px, bottom 5px
 * chart.margin(10, '15px', 5);
 * // 3) top 10px, right 15px, bottom 5px, left 12px
 * chart.margin(10, '15px', '5px', 12);
 * @param {(string|number)=} opt_value1 Top or top-bottom space.
 * @param {(string|number)=} opt_value2 Right or right-left space.
 * @param {(string|number)=} opt_value3 Bottom space.
 * @param {(string|number)=} opt_value4 Left space.
 * @return {anychart.Chart} Экземпляр класса {@link anychart.Chart} для цепочного вызова.
 *//**
 * @ignoreDoc
 * @param {(string|number|anychart.utils.Space)=} opt_spaceOrTopOrTopAndBottom .
 * @param {(string|number)=} opt_rightOrRightAndLeft .
 * @param {(string|number)=} opt_bottom .
 * @param {(string|number)=} opt_left .
 * @return {anychart.Chart|anychart.utils.Margin} .
 */
anychart.Chart.prototype.margin = function(opt_spaceOrTopOrTopAndBottom, opt_rightOrRightAndLeft, opt_bottom, opt_left) {
  if (!this.margin_) {
    this.margin_ = new anychart.utils.Margin();
    this.margin_.listen(anychart.utils.Invalidatable.INVALIDATED, this.marginInvalidated_, false, this);
    this.registerDisposable(this.margin_);
  }

  if (goog.isDef(opt_spaceOrTopOrTopAndBottom)) {
    this.margin_.set(opt_spaceOrTopOrTopAndBottom, opt_rightOrRightAndLeft, opt_bottom, opt_left);
    return this;
  }
  return this.margin_;
};


/**
 * Internal margin invalidation handler.
 * @param {anychart.utils.InvalidatedStatesEvent} event Event object.
 * @private
 */
anychart.Chart.prototype.marginInvalidated_ = function(event) {
  //что бы не поменялось в марджинах, оно влияет на размер чарта, значит нужно перерисовывать все
  this.invalidate(anychart.utils.ConsistencyState.APPEARANCE);
};


//----------------------------------------------------------------------------------------------------------------------
//
//  Padding.
//
//----------------------------------------------------------------------------------------------------------------------
/**
 * Getter for current chart padding.
 * @illustration <t>simple</t>
 * //margins
 * var margins = 20;
 * stage.rect(0, 0, stage.width(), stage.height()).fill('orange 0.1');
 * stage.text(stage.width() / 3, 0, 'margins');
 * //arrows
 * stage.path()
 *     .moveTo(stage.width() / 2, 0)
 *     .lineTo(stage.width() / 2, margins);
 * stage.triangleUp(stage.width() / 2, 3, 3);
 * stage.triangleDown(stage.width() / 2, margins - 3, 3);
 * stage.path()
 *     .moveTo(stage.width() / 2, stage.height() - margins)
 *     .lineTo(stage.width() / 2, stage.height());
 * stage.triangleUp(stage.width() / 2, stage.height() - margins + 3, 3);
 * stage.triangleDown(stage.width() / 2, stage.height() - 3, 3);
 * stage.path()
 *     .moveTo(0, stage.height() / 2)
 *     .lineTo(margins, stage.height() / 2);
 * stage.triangleUp(3, stage.height() / 2 + 5.5, 3).rotateByAnchor(-90, 'center');
 * stage.triangleDown(margins - 3, stage.height() / 2 + 4, 3).rotateByAnchor(-90, 'center');
 * stage.path()
 *     .moveTo(stage.width(), stage.height() / 2)
 *     .lineTo(stage.width() - margins, stage.height() / 2);
 * stage.triangleUp(stage.width() - margins + 3, stage.height() / 2 + 5.5, 3).rotateByAnchor(-90, 'center');
 * stage.triangleDown(stage.width() - 3, stage.height() / 2 + 4, 3).rotateByAnchor(-90, 'center');
 * //paddings
 * var paddings = 20;
 * stage.rect(margins, margins, stage.width() - 2 * margins, stage.height() - 2 * margins).fill('blue 0.1');
 * stage.text(stage.width() / 3, margins, 'paddings');
 * //arrows
 * stage.path()
 *     .moveTo(stage.width() / 2, 0 + margins)
 *     .lineTo(stage.width() / 2, paddings + margins);
 * stage.triangleUp(stage.width() / 2, 3 + margins, 3);
 * stage.triangleDown(stage.width() / 2, paddings - 3 + margins, 3);
 * stage.path()
 *     .moveTo(stage.width() / 2, stage.height() - paddings - margins)
 *     .lineTo(stage.width() / 2, stage.height() - margins);
 * stage.triangleUp(stage.width() / 2, stage.height() - paddings + 3 - margins, 3);
 * stage.triangleDown(stage.width() / 2, stage.height() - 3 - margins, 3);
 * stage.path()
 *     .moveTo(margins, stage.height() / 2)
 *     .lineTo(margins + paddings, stage.height() / 2);
 * stage.triangleUp(margins + 3, stage.height() / 2 + 5.5, 3).rotateByAnchor(-90, 'center');
 * stage.triangleDown(margins + paddings - 3, stage.height() / 2 + 4, 3).rotateByAnchor(-90, 'center');
 * stage.path()
 *     .moveTo(stage.width() - margins, stage.height() / 2)
 *     .lineTo(stage.width() - margins - paddings, stage.height() / 2);
 * stage.triangleUp(stage.width() - margins - paddings + 3, stage.height() / 2 + 5.5, 3).rotateByAnchor(-90, 'center');
 * stage.triangleDown(stage.width() - margins - 3, stage.height() / 2 + 4, 3).rotateByAnchor(-90, 'center');
 * //content area
 * stage.rect(paddings + margins, paddings + margins, stage.width() - 2 * (paddings + margins), stage.height() - 2 * (paddings + margins)).fill('white 1');
 * stage.text(stage.width() / 4, stage.height() / 2 - paddings, 'Chart Content Area').fontSize(21);
 * @return {anychart.utils.Padding} Current chart padding.
 *//**
 * Setter for chart paddings in pixels by one value.<br/>
 * @example <t>listingOnly</t>
 * // all paddings 15px
 * chart.padding(15);
 * // all paddings 15px
 * chart.padding('15px');
 * // top and bottom 5px ,right and left 15px
 * chart.padding( new anychart.utils.Space(5,15) );
 * @param {(string|number|anychart.utils.Space)=} opt_value Value to set.
 * @return {anychart.Chart} Экземпляр класса {@link anychart.Chart} для цепочного вызова.
 *//**
 * Setter for chart paddings in pixels by few numbers.<br/>
 * @example <t>listingOnly</t>
 * // 1) top and bottom 10px, left and right 15px
 * chart.padding(10, '15px');
 * // 2) top 10px, left and right 15px, bottom 5px
 * chart.padding(10, '15px', 5);
 * // 3) top 10px, right 15px, bottom 5px, left 12px
 * chart.padding(10, '15px', '5px', 12);
 * @param {(string|number)=} opt_value1 Top or top-bottom space.
 * @param {(string|number)=} opt_value2 Right or right-left space.
 * @param {(string|number)=} opt_value3 Bottom space.
 * @param {(string|number)=} opt_value4 Left space.
 * @return {anychart.Chart} Экземпляр класса {@link anychart.Chart} для цепочного вызова.
 *//**
 * @ignoreDoc
 * @param {(string|number|anychart.utils.Space)=} opt_spaceOrTopOrTopAndBottom .
 * @param {(string|number)=} opt_rightOrRightAndLeft .
 * @param {(string|number)=} opt_bottom .
 * @param {(string|number)=} opt_left .
 * @return {anychart.Chart|anychart.utils.Padding} .
 */
anychart.Chart.prototype.padding = function(opt_spaceOrTopOrTopAndBottom, opt_rightOrRightAndLeft, opt_bottom, opt_left) {
  if (!this.padding_) {
    this.padding_ = new anychart.utils.Padding();
    this.padding_.listen(anychart.utils.Invalidatable.INVALIDATED, this.paddingInvalidated_, false, this);
    this.registerDisposable(this.padding_);
  }

  if (goog.isDef(opt_spaceOrTopOrTopAndBottom)) {
    this.padding_.set(opt_spaceOrTopOrTopAndBottom, opt_rightOrRightAndLeft, opt_bottom, opt_left);
    return this;
  }
  return this.padding_;
};


/**
 * Internal padding invalidation handler.
 * @param {anychart.utils.InvalidatedStatesEvent} event Event object.
 * @private
 */
anychart.Chart.prototype.paddingInvalidated_ = function(event) {
  //что бы не поменялось в паддингах, оно влияет на размер чарта, значит нужно перерисовывать все
  this.invalidate(anychart.utils.ConsistencyState.APPEARANCE);
};


//----------------------------------------------------------------------------------------------------------------------
//
//  Background.
//
//----------------------------------------------------------------------------------------------------------------------
/**
 * Getter for current chart background.
 * @example
 * chart = new anychart.Chart();
 * chart.background().stroke('2 green');
 * @return {anychart.elements.Background} Current chart background.
 *//**
 * Setter for chart background.
 * @example
 * chart = new anychart.Chart();
 * var background = new anychart.elements.Background()
 *    .stroke('2 rgb(36,102,177)')
 *    .corners(10)
 *    .fill({
 *           keys: [
 *             "rgb(255,255,255) 1",
 *             "rgb(233,233,233) 1",
 *             "rgb(255,255,255) 1"
 *           ],
 *           angle: -90
 *         });
 * chart.background(background);
 * @param {(anychart.elements.Background)=} opt_value Background object to set.
 * @return {anychart.Chart} Экземпляр класса {@link anychart.Chart} для цепочного вызова.
 *//**
 * @ignoreDoc
 * @param {(anychart.elements.Background)=} opt_value .
 * @return {anychart.Chart|anychart.elements.Background} .
 */
anychart.Chart.prototype.background = function(opt_value) {
  if (!this.background_) {
    this.background_ = new anychart.elements.Background();
    this.background_.cloneFrom(null);
    this.background_.listen(anychart.utils.Invalidatable.INVALIDATED, this.backgroundInvalidated_, false, this);
    this.registerDisposable(this.background_);
  }

  if (goog.isDef(opt_value)) {
    this.background_.suspendInvalidationDispatching();
    this.background_.cloneFrom(opt_value);
    this.background_.resumeInvalidationDispatching(true);
    return this;
  }
  return this.background_;
};


/**
 * Internal background invalidation handler.
 * @param {anychart.utils.InvalidatedStatesEvent} event Event object.
 * @private
 */
anychart.Chart.prototype.backgroundInvalidated_ = function(event) {
  // что бы не изменилось в фоне, мы перерисовываем только фон.
  // он никак не может повлиять на остальные елементы
  this.invalidate(anychart.utils.ConsistencyState.BACKGROUND_APPEARANCE);
};


//----------------------------------------------------------------------------------------------------------------------
//
//  Title.
//
//----------------------------------------------------------------------------------------------------------------------
/**
 * Getter for chart title.
 * @example
 * chart = new anychart.Chart();
 * chart.title().fontSize(41);
 * @return {anychart.elements.Title} Current chart title.
 *//**
 * Setter for chart title.
 * @example <c>Simple string</c>
 * chart = new anychart.Chart();
 * chart.title('My custom title');
 * @example
 * chart = new anychart.Chart();
 * chart.title( new anychart.elements.Title()
 *      .fontColor('red')
 *      .text('Red title')
 * );
 * @param {(string|anychart.elements.Title)=} opt_value Chart title text or title instance for copy settings from.
 * @return {anychart.Chart} Экземпляр класса {@link anychart.Chart} для цепочного вызова.
 *//**
 * @ignoreDoc
 * @param {(string|anychart.elements.Title)=} opt_value .
 * @return {anychart.elements.Title|anychart.Chart} .
 */
anychart.Chart.prototype.title = function(opt_value) {
  if (!this.title_) {
    this.title_ = new anychart.elements.Title();
    this.title_.listen(anychart.utils.Invalidatable.INVALIDATED, this.titleInvalidated_, false, this);
    this.registerDisposable(this.title_);
  }

  if (goog.isDef(opt_value)) {
    this.title_.suspendInvalidationDispatching();
    if (goog.isString(opt_value)) {
      this.title_.text(opt_value);
    } else {
      this.title_.cloneFrom(opt_value);
    }
    this.title_.resumeInvalidationDispatching(true);
    return this;
  }
  return this.title_;
};


/**
 * Internal title invalidation handler.
 * @param {anychart.utils.InvalidatedStatesEvent} event Event object.
 * @private
 */
anychart.Chart.prototype.titleInvalidated_ = function(event) {
  //Если у тайтла поменялись размеры, то это влияет на весь график и нужно перерисовывать все
  if (event.invalidated(anychart.utils.ConsistencyState.PIXEL_BOUNDS)) {
    this.invalidate(anychart.utils.ConsistencyState.APPEARANCE);
  } else {
    //Если размер не поменялся, то все остальное (цвет текста или фона) на график не влияет
    this.invalidate(anychart.utils.ConsistencyState.TITLE_APPEARANCE);
  }
};


//----------------------------------------------------------------------------------------------------------------------
//
//  Drawing.
//
//----------------------------------------------------------------------------------------------------------------------
/**
 * Запускает процедуру рендеринга всего содержимого чарта в заранее указанный контейнер.
 * @return {anychart.Chart} Экземпляр класса {@link anychart.Chart} для цепочного вызова.
 */
anychart.Chart.prototype.draw = function() {
  if (this.isConsistent()) return this;

  //total chart area bounds, do not override, it can be useful later.
  var totalBounds;
  //chart area with applied margin.
  var boundsWithoutMargin;
  //chart area with applied margin and padding
  var boundsWithoutPadding;
  // chart area with applied margin, padding and title
  var boundsWithoutTitle;
  //chart content bounds, allocated space for all chart appearance items.
  var contentAreaBounds;

  //create root element only if draw ever called
  if (!this.rootElement) this.rootElement = new anychart.utils.ZIndexedLayer();

  //suspend stage
  var stage = this.rootElement.getStage();
  var manualSuspend = stage && !stage.isSuspended();
  if (manualSuspend) stage.suspend();

  totalBounds = /** @type {!anychart.math.Rect} */(this.pixelBounds());
  boundsWithoutMargin = this.margin_ ?
      this.margin_.tightenBounds(totalBounds) :
      totalBounds;

  //start clear appearance states
  if (this.shouldDrawBackground()) {
    this.background_.suspendInvalidationDispatching();
    if (!this.background_.container()) this.background_.container(this.rootElement);
    this.background_.pixelBounds(boundsWithoutMargin);
    this.background_.resumeInvalidationDispatching(false);
    this.background_.draw();
    this.markConsistent(anychart.utils.ConsistencyState.BACKGROUND_APPEARANCE);
  }

  boundsWithoutPadding = this.padding_ ?
      this.padding_.tightenBounds(boundsWithoutMargin) :
      boundsWithoutMargin;

  if (this.shouldDrawTitle()) {
    this.title_.suspendInvalidationDispatching();
    if (!this.title_.container()) this.title_.container(this.rootElement);
    this.title_.parentBounds(boundsWithoutPadding);
    this.title_.resumeInvalidationDispatching(false);
    this.title_.draw();
    this.markConsistent(anychart.utils.ConsistencyState.TITLE_APPEARANCE);
  }

  boundsWithoutTitle = this.title_ ?
      this.title_.getRemainingBounds() :
      boundsWithoutPadding;

  contentAreaBounds = boundsWithoutTitle.clone();
  this.drawContent(contentAreaBounds);

  this.markConsistent(anychart.utils.ConsistencyState.APPEARANCE);
  //end clear appearance states

  //start clear container consistency states
  if (this.hasInvalidationState(anychart.utils.ConsistencyState.Z_INDEX)) {
    this.rootElement.zIndex(/** @type {number} */(this.zIndex()));
    this.markConsistent(anychart.utils.ConsistencyState.Z_INDEX);
  }

  if (this.hasInvalidationState(anychart.utils.ConsistencyState.CONTAINER)) {
    this.rootElement.parent(/** @type {acgraph.vector.ILayer} */(this.container()));
    this.markConsistent(anychart.utils.ConsistencyState.CONTAINER);
  }
  //end clear container consistency states

  //after all chart items drawn, we can clear other states
  this.markConsistent(anychart.utils.ConsistencyState.BOUNDS);
  this.markConsistent(anychart.utils.ConsistencyState.PIXEL_BOUNDS);

  if (manualSuspend) stage.resume();

  //todo(Anton Saukh): rework this shit!
  this.listen(anychart.utils.Invalidatable.INVALIDATED, this.invalidateHandler_, false, this);
  //end shit

  return this;
};


/**
 * Extension point do draw chart content.
 * @param {acgraph.math.Rect} bounds Chart content area bounds.
 */
anychart.Chart.prototype.drawContent = goog.nullFunction;


//todo(Anton Saukh): rework this shit!
/**
 * Internal invalidation event handler, redraw chart on all invalidate events.
 * @param {anychart.utils.InvalidatedStatesEvent} event Event object.
 * @private
 */
anychart.Chart.prototype.invalidateHandler_ = function(event) {
  if (event.invalidated(anychart.utils.ConsistencyState.PIXEL_BOUNDS)) {
    this.suspendInvalidationDispatching();
    this.invalidate(anychart.utils.ConsistencyState.APPEARANCE);
    this.resumeInvalidationDispatching(false);
  }
  this.draw();
};
//end shit


/**
 * Define, should we draw background or not.
 * @return {boolean} Should we draw background or not.
 */
anychart.Chart.prototype.shouldDrawBackground = function() {
  return !!(this.background_ && (
      this.hasInvalidationState(anychart.utils.ConsistencyState.APPEARANCE) ||
          this.hasInvalidationState(anychart.utils.ConsistencyState.BACKGROUND_APPEARANCE)));
};


/**
 * Define, should we draw background or not.
 * @return {boolean} Should we draw background or not.
 */
anychart.Chart.prototype.shouldDrawTitle = function() {
  return !!(this.title_ && (
      this.hasInvalidationState(anychart.utils.ConsistencyState.APPEARANCE) ||
          this.hasInvalidationState(anychart.utils.ConsistencyState.TITLE_APPEARANCE)));
};
