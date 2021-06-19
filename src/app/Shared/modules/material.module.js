"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModuleModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var a11y_1 = require("@angular/cdk/a11y");
var clipboard_1 = require("@angular/cdk/clipboard");
var stepper_1 = require("@angular/cdk/stepper");
var badge_1 = require("@angular/material/badge");
var bottom_sheet_1 = require("@angular/material/bottom-sheet");
var button_1 = require("@angular/material/button");
var button_toggle_1 = require("@angular/material/button-toggle");
var core_2 = require("@angular/material/core");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var progress_bar_1 = require("@angular/material/progress-bar");
var radio_1 = require("@angular/material/radio");
var paginator_1 = require("@angular/material/paginator");
var menu_1 = require("@angular/material/menu");
var list_1 = require("@angular/material/list");
var input_1 = require("@angular/material/input");
var icon_1 = require("@angular/material/icon");
var grid_list_1 = require("@angular/material/grid-list");
var expansion_1 = require("@angular/material/expansion");
var divider_1 = require("@angular/material/divider");
var datepicker_1 = require("@angular/material/datepicker");
var checkbox_1 = require("@angular/material/checkbox");
var tree_1 = require("@angular/material/tree");
var overlay_1 = require("@angular/cdk/overlay");
var portal_1 = require("@angular/cdk/portal");
var scrolling_1 = require("@angular/cdk/scrolling");
var tabs_1 = require("@angular/material/tabs");
var table_1 = require("@angular/material/table");
var sort_1 = require("@angular/material/sort");
var snack_bar_1 = require("@angular/material/snack-bar");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var slider_1 = require("@angular/material/slider");
var sidenav_1 = require("@angular/material/sidenav");
var toolbar_1 = require("@angular/material/toolbar");
var tooltip_1 = require("@angular/material/tooltip");
var table_2 = require("@angular/cdk/table");
var tree_2 = require("@angular/cdk/tree");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var autocomplete_1 = require("@angular/material/autocomplete");
var dialog_1 = require("@angular/material/dialog");
var stepper_2 = require("@angular/material/stepper");
var chips_1 = require("@angular/material/chips");
var card_1 = require("@angular/material/card");
var select_1 = require("@angular/material/select");
var MaterialModuleModule = /** @class */ (function () {
    function MaterialModuleModule() {
    }
    MaterialModuleModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule
            ],
            exports: [
                a11y_1.A11yModule,
                clipboard_1.ClipboardModule,
                stepper_1.CdkStepperModule,
                table_2.CdkTableModule,
                tree_2.CdkTreeModule,
                drag_drop_1.DragDropModule,
                autocomplete_1.MatAutocompleteModule,
                badge_1.MatBadgeModule,
                bottom_sheet_1.MatBottomSheetModule,
                button_1.MatButtonModule,
                button_toggle_1.MatButtonToggleModule,
                card_1.MatCardModule,
                checkbox_1.MatCheckboxModule,
                chips_1.MatChipsModule,
                stepper_2.MatStepperModule,
                datepicker_1.MatDatepickerModule,
                dialog_1.MatDialogModule,
                divider_1.MatDividerModule,
                expansion_1.MatExpansionModule,
                grid_list_1.MatGridListModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                list_1.MatListModule,
                menu_1.MatMenuModule,
                core_2.MatNativeDateModule,
                paginator_1.MatPaginatorModule,
                progress_bar_1.MatProgressBarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                radio_1.MatRadioModule,
                core_2.MatRippleModule,
                select_1.MatSelectModule,
                sidenav_1.MatSidenavModule,
                slider_1.MatSliderModule,
                slide_toggle_1.MatSlideToggleModule,
                snack_bar_1.MatSnackBarModule,
                sort_1.MatSortModule,
                table_1.MatTableModule,
                tabs_1.MatTabsModule,
                toolbar_1.MatToolbarModule,
                tooltip_1.MatTooltipModule,
                tree_1.MatTreeModule,
                overlay_1.OverlayModule,
                portal_1.PortalModule,
                scrolling_1.ScrollingModule,
            ]
        })
    ], MaterialModuleModule);
    return MaterialModuleModule;
}());
exports.MaterialModuleModule = MaterialModuleModule;
