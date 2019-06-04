/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CountryCode } from './data/country-code';
import { phoneNumberValidator } from './ngx-intl-tel-input.validator';
import * as lpn from 'google-libphonenumber';
var ɵ0 = phoneNumberValidator;
var NgxIntlTelInputComponent = /** @class */ (function () {
    function NgxIntlTelInputComponent(countryCodeData) {
        this.countryCodeData = countryCodeData;
        this.value = '';
        this.preferredCountries = [];
        this.enablePlaceholder = true;
        this.cssClass = 'form-control';
        this.onlyCountries = [];
        this.enableAutoCountrySelect = false;
        this.phoneNumber = '';
        this.allCountries = [];
        this.preferredCountriesInDropDown = [];
        this.phoneUtil = lpn.PhoneNumberUtil.getInstance();
        this.disabled = false;
        this.errors = ['Phone number is required.'];
        this.onTouched = function () { };
        this.propagateChange = function (_) { };
    }
    /**
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fetchCountryData();
        if (this.preferredCountries.length) {
            this.preferredCountries.forEach(function (iso2) {
                /** @type {?} */
                var preferredCountry = _this.allCountries.filter(function (c) {
                    return c.iso2 === iso2;
                });
                _this.preferredCountriesInDropDown.push(preferredCountry[0]);
            });
        }
        if (this.onlyCountries.length) {
            this.allCountries = this.allCountries.filter(function (c) { return _this.onlyCountries.includes(c.iso2); });
        }
        if (this.preferredCountriesInDropDown.length) {
            this.selectedCountry = this.preferredCountriesInDropDown[0];
        }
        else {
            this.selectedCountry = this.allCountries[0];
        }
    };
    /**
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.onPhoneNumberChange = /**
     * @return {?}
     */
    function () {
        this.value = this.phoneNumber;
        /** @type {?} */
        var number;
        try {
            number = this.phoneUtil.parse(this.phoneNumber, this.selectedCountry.iso2.toUpperCase());
        }
        catch (e) {
        }
        /** @type {?} */
        var countryCode = this.selectedCountry.iso2;
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            countryCode = number && number.getCountryCode()
                ? this.getCountryIsoCode(number.getCountryCode(), number)
                : this.selectedCountry.iso2;
            if (countryCode !== this.selectedCountry.iso2) {
                /** @type {?} */
                var newCountry = this.allCountries.find(function (c) { return c.iso2 === countryCode; });
                if (newCountry) {
                    this.selectedCountry = newCountry;
                }
            }
        }
        countryCode = countryCode ? countryCode : this.selectedCountry.iso2;
        if (!this.value) {
            // tslint:disable-next-line:no-null-keyword
            this.propagateChange(null);
        }
        else {
            this.propagateChange({
                number: this.value,
                internationalNumber: number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL) : '',
                nationalNumber: number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL) : '',
                countryCode: countryCode.toUpperCase()
            });
        }
    };
    /**
     * @param {?} country
     * @param {?} el
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.onCountrySelect = /**
     * @param {?} country
     * @param {?} el
     * @return {?}
     */
    function (country, el) {
        this.selectedCountry = country;
        if (this.phoneNumber.length > 0) {
            this.value = this.phoneNumber;
            /** @type {?} */
            var number = void 0;
            try {
                number = this.phoneUtil.parse(this.phoneNumber, this.selectedCountry.iso2.toUpperCase());
            }
            catch (e) {
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL) : '',
                nationalNumber: number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL) : '',
                countryCode: this.selectedCountry.iso2.toUpperCase()
            });
        }
        el.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.onInputKeyPress = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var pattern = /[0-9\+\-\ ]/;
        /** @type {?} */
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.fetchCountryData = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.countryCodeData.allCountries.forEach(function (c) {
            /** @type {?} */
            var country = {
                name: c[0].toString(),
                iso2: c[1].toString(),
                dialCode: c[2].toString(),
                priority: +c[3] || 0,
                areaCodes: (/** @type {?} */ (c[4])) || undefined,
                flagClass: c[1].toString().toLocaleLowerCase(),
                placeHolder: ''
            };
            if (_this.enablePlaceholder) {
                country.placeHolder = _this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
            }
            _this.allCountries.push(country);
        });
    };
    /**
     * @protected
     * @param {?} countryCode
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.getPhoneNumberPlaceHolder = /**
     * @protected
     * @param {?} countryCode
     * @return {?}
     */
    function (countryCode) {
        try {
            return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat.INTERNATIONAL);
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        if (obj) {
            this.phoneNumber = obj;
            setTimeout(function () {
                _this.onPhoneNumberChange();
            }, 1);
        }
    };
    /**
     * @private
     * @param {?} countryCode
     * @param {?} number
     * @return {?}
     */
    NgxIntlTelInputComponent.prototype.getCountryIsoCode = /**
     * @private
     * @param {?} countryCode
     * @param {?} number
     * @return {?}
     */
    function (countryCode, number) {
        // Will use this to match area code from the first numbers
        /** @type {?} */
        var rawNumber = number.values_['2'].toString();
        // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
        /** @type {?} */
        var countries = this.allCountries.filter(function (c) { return c.dialCode === countryCode.toString(); });
        // Main country is the country, which has no areaCodes specified in country-code.ts file.
        /** @type {?} */
        var mainCountry = countries.find(function (c) { return c.areaCodes === undefined; });
        // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
        /** @type {?} */
        var secondaryCountries = countries.filter(function (c) { return c.areaCodes !== undefined; });
        /** @type {?} */
        var matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
        /*
            Interate over each secondary country and check if nationalNumber starts with any of areaCodes available.
            If no matches found, fallback to the main country.
        */
        secondaryCountries.forEach(function (country) {
            country.areaCodes.forEach(function (areaCode) {
                if (rawNumber.startsWith(areaCode)) {
                    matchedCountry = country.iso2;
                }
            });
        });
        return matchedCountry;
    };
    NgxIntlTelInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-intl-tel-input',
                    template: "<div class=\"intl-tel-input allow-dropdown\">\r\n  <div class=\"flag-container\" dropdown [ngClass]=\"{'disabled': disabled}\">\r\n    <div class=\"selected-flag dropdown-toggle\" dropdownToggle>\r\n      <div class=\"iti-flag\" [ngClass]=\"selectedCountry.flagClass\"></div>\r\n      <div class=\"iti-arrow\"></div>\r\n    </div>\r\n    <ul class=\"country-list dropdown-menu\" *dropdownMenu>\r\n      <li class=\"country\" *ngFor=\"let country of preferredCountriesInDropDown\" (click)=\"onCountrySelect(country, focusable)\">\r\n        <div class=\"flag-box\">\r\n          <div class=\"iti-flag\" [ngClass]=\"country.flagClass\"></div>\r\n        </div>\r\n        <span class=\"country-name\">{{country.name}}</span>\r\n        <span class=\"dial-code\">+{{country.dialCode}}</span>\r\n      </li>\r\n      <li class=\"divider\" *ngIf=\"preferredCountriesInDropDown?.length\"></li>\r\n      <li class=\"country\" *ngFor=\"let country of allCountries\" (click)=\"onCountrySelect(country, focusable)\">\r\n        <div class=\"flag-box\">\r\n          <div class=\"iti-flag\" [ngClass]=\"country.flagClass\"></div>\r\n        </div>\r\n        <span class=\"country-name\">{{country.name}}</span>\r\n        <span class=\"dial-code\">+{{country.dialCode}}</span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <input type=\"tel\" id=\"phone\" autocomplete=\"off\"\r\n        [ngClass]=\"cssClass\"\r\n        (blur)=\"onTouched()\"\r\n        (keypress)=\"onInputKeyPress($event)\"\r\n        [(ngModel)]=\"phoneNumber\"\r\n        (ngModelChange)=\"onPhoneNumberChange()\"\r\n        [disabled]=\"disabled\"\r\n        [placeholder]=\"selectedCountry.placeHolder\" #focusable>\r\n</div>\r\n",
                    providers: [
                        CountryCode,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            // tslint:disable-next-line:no-forward-ref
                            useExisting: forwardRef(function () { return NgxIntlTelInputComponent; }),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useValue: ɵ0,
                            multi: true,
                        }
                    ],
                    styles: ["li.country:hover{background-color:rgba(0,0,0,.05)}.selected-flag.dropdown-toggle:after{content:none}.flag-container.disabled{cursor:default!important}.intl-tel-input.allow-dropdown .flag-container.disabled:hover .selected-flag{background:0 0}"]
                }] }
    ];
    /** @nocollapse */
    NgxIntlTelInputComponent.ctorParameters = function () { return [
        { type: CountryCode }
    ]; };
    NgxIntlTelInputComponent.propDecorators = {
        value: [{ type: Input }],
        preferredCountries: [{ type: Input }],
        enablePlaceholder: [{ type: Input }],
        cssClass: [{ type: Input }],
        onlyCountries: [{ type: Input }],
        enableAutoCountrySelect: [{ type: Input }]
    };
    return NgxIntlTelInputComponent;
}());
export { NgxIntlTelInputComponent };
if (false) {
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.value;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.preferredCountries;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.enablePlaceholder;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.cssClass;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.onlyCountries;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.enableAutoCountrySelect;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.phoneNumber;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.allCountries;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.preferredCountriesInDropDown;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.selectedCountry;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.phoneUtil;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.disabled;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.errors;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.onTouched;
    /** @type {?} */
    NgxIntlTelInputComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    NgxIntlTelInputComponent.prototype.countryCodeData;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUF3QixhQUFhLEVBQUUsaUJBQWlCLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEUsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztTQWdCaEMsb0JBQW9CO0FBZGpDO0lBd0NDLGtDQUNTLGVBQTRCO1FBQTVCLG9CQUFlLEdBQWYsZUFBZSxDQUFhO1FBcEI1QixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsdUJBQWtCLEdBQWtCLEVBQUUsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMxQixrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbEMsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBRXpDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUNsQyxpQ0FBNEIsR0FBbUIsRUFBRSxDQUFDO1FBRWxELGNBQVMsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFlLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUduRCxjQUFTLEdBQUcsY0FBUSxDQUFDLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxVQUFDLENBQU0s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dkQsS0FBSyxFQUFFLElBQUk7eUJBQ1g7d0JBQ0Q7NEJBQ0MsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFFBQVEsSUFBc0I7NEJBQzlCLEtBQUssRUFBRSxJQUFJO3lCQUNYO3FCQUNEOztpQkFDRDs7OztnQkF2QlEsV0FBVzs7O3dCQTBCbEIsS0FBSztxQ0FDTCxLQUFLO29DQUNMLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLOzBDQUNMLEtBQUs7O0lBd0xQLCtCQUFDO0NBQUEsQUFsTkQsSUFrTkM7U0EvTFksd0JBQXdCOzs7SUFFcEMseUNBQW9COztJQUNwQixzREFBZ0Q7O0lBQ2hELHFEQUFrQzs7SUFDbEMsNENBQW1DOztJQUNuQyxpREFBMkM7O0lBQzNDLDJEQUF5Qzs7SUFFekMsK0NBQWlCOztJQUNqQixnREFBa0M7O0lBQ2xDLGdFQUFrRDs7SUFDbEQsbURBQXlCOztJQUN6Qiw2Q0FBOEM7O0lBQzlDLDRDQUFpQjs7SUFDakIsMENBQW1EOztJQUduRCw2Q0FBc0I7O0lBQ3RCLG1EQUFrQzs7Ozs7SUFHakMsbURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvdW50cnlDb2RlIH0gZnJvbSAnLi9kYXRhL2NvdW50cnktY29kZSc7XHJcbmltcG9ydCB7IHBob25lTnVtYmVyVmFsaWRhdG9yIH0gZnJvbSAnLi9uZ3gtaW50bC10ZWwtaW5wdXQudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4vbW9kZWwvY291bnRyeS5tb2RlbCc7XHJcbmltcG9ydCAqIGFzIGxwbiBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICduZ3gtaW50bC10ZWwtaW5wdXQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL25neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuY3NzJ10sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHRDb3VudHJ5Q29kZSxcclxuXHRcdHtcclxuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1mb3J3YXJkLXJlZlxyXG5cdFx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQpLFxyXG5cdFx0XHRtdWx0aTogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuXHRcdFx0dXNlVmFsdWU6IHBob25lTnVtYmVyVmFsaWRhdG9yLFxyXG5cdFx0XHRtdWx0aTogdHJ1ZSxcclxuXHRcdH1cclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRASW5wdXQoKSB2YWx1ZSA9ICcnO1xyXG5cdEBJbnB1dCgpIHByZWZlcnJlZENvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cdEBJbnB1dCgpIGVuYWJsZVBsYWNlaG9sZGVyID0gdHJ1ZTtcclxuXHRASW5wdXQoKSBjc3NDbGFzcyA9ICdmb3JtLWNvbnRyb2wnO1xyXG5cdEBJbnB1dCgpIG9ubHlDb3VudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHRASW5wdXQoKSBlbmFibGVBdXRvQ291bnRyeVNlbGVjdCA9IGZhbHNlO1xyXG5cclxuXHRwaG9uZU51bWJlciA9ICcnO1xyXG5cdGFsbENvdW50cmllczogQXJyYXk8Q291bnRyeT4gPSBbXTtcclxuXHRwcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duOiBBcnJheTxDb3VudHJ5PiA9IFtdO1xyXG5cdHNlbGVjdGVkQ291bnRyeTogQ291bnRyeTtcclxuXHRwaG9uZVV0aWwgPSBscG4uUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCk7XHJcblx0ZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRlcnJvcnM6IEFycmF5PGFueT4gPSBbJ1Bob25lIG51bWJlciBpcyByZXF1aXJlZC4nXTtcclxuXHJcblxyXG5cdG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHRwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb3VudHJ5Q29kZURhdGE6IENvdW50cnlDb2RlXHJcblx0KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0XHR0aGlzLmZldGNoQ291bnRyeURhdGEoKTtcclxuXHJcblx0XHRpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmZvckVhY2goaXNvMiA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcHJlZmVycmVkQ291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcigoYykgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGMuaXNvMiA9PT0gaXNvMjtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duLnB1c2gocHJlZmVycmVkQ291bnRyeVswXSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMub25seUNvdW50cmllcy5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5hbGxDb3VudHJpZXMgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoYyA9PiB0aGlzLm9ubHlDb3VudHJpZXMuaW5jbHVkZXMoYy5pc28yKSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkQ291bnRyeSA9IHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93blswXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gdGhpcy5hbGxDb3VudHJpZXNbMF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25QaG9uZU51bWJlckNoYW5nZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMudmFsdWUgPSB0aGlzLnBob25lTnVtYmVyO1xyXG5cclxuXHRcdGxldCBudW1iZXI6IGxwbi5QaG9uZU51bWJlcjtcclxuXHRcdHRyeSB7XHJcblx0XHRcdG51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKHRoaXMucGhvbmVOdW1iZXIsIHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIudG9VcHBlckNhc2UoKSk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGNvdW50cnlDb2RlID0gdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcclxuXHRcdC8vIGF1dG8gc2VsZWN0IGNvdW50cnkgYmFzZWQgb24gdGhlIGV4dGVuc2lvbiAoYW5kIGFyZWFDb2RlIGlmIG5lZWRlZCkgKGUuZyBzZWxlY3QgQ2FuYWRhIGlmIG51bWJlciBzdGFydHMgd2l0aCArMSA0MTYpXHJcblx0XHRpZiAodGhpcy5lbmFibGVBdXRvQ291bnRyeVNlbGVjdCkge1xyXG5cdFx0XHRjb3VudHJ5Q29kZSA9IG51bWJlciAmJiBudW1iZXIuZ2V0Q291bnRyeUNvZGUoKVxyXG5cdFx0XHRcdD8gdGhpcy5nZXRDb3VudHJ5SXNvQ29kZShudW1iZXIuZ2V0Q291bnRyeUNvZGUoKSwgbnVtYmVyKVxyXG5cdFx0XHRcdDogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcclxuXHRcdFx0aWYgKGNvdW50cnlDb2RlICE9PSB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yKSB7XHJcblx0XHRcdFx0Y29uc3QgbmV3Q291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbmQoYyA9PiBjLmlzbzIgPT09IGNvdW50cnlDb2RlKTtcclxuXHRcdFx0XHRpZiAobmV3Q291bnRyeSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZENvdW50cnkgPSBuZXdDb3VudHJ5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZSA/IGNvdW50cnlDb2RlIDogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcclxuXHJcblx0XHRpZiAoIXRoaXMudmFsdWUpIHtcclxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW51bGwta2V5d29yZFxyXG5cdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZShudWxsKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKHtcclxuXHRcdFx0XHRudW1iZXI6IHRoaXMudmFsdWUsXHJcblx0XHRcdFx0aW50ZXJuYXRpb25hbE51bWJlcjogbnVtYmVyID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpIDogJycsXHJcblx0XHRcdFx0bmF0aW9uYWxOdW1iZXI6IG51bWJlciA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5OQVRJT05BTCkgOiAnJyxcclxuXHRcdFx0XHRjb3VudHJ5Q29kZTogY291bnRyeUNvZGUudG9VcHBlckNhc2UoKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkNvdW50cnlTZWxlY3QoY291bnRyeTogQ291bnRyeSwgZWwpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyeTtcclxuXHJcblx0XHRpZiAodGhpcy5waG9uZU51bWJlci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLnBob25lTnVtYmVyO1xyXG5cclxuXHRcdFx0bGV0IG51bWJlcjogbHBuLlBob25lTnVtYmVyO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdG51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKHRoaXMucGhvbmVOdW1iZXIsIHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIudG9VcHBlckNhc2UoKSk7XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2Uoe1xyXG5cdFx0XHRcdG51bWJlcjogdGhpcy52YWx1ZSxcclxuXHRcdFx0XHRpbnRlcm5hdGlvbmFsTnVtYmVyOiBudW1iZXIgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTCkgOiAnJyAsXHJcblx0XHRcdFx0bmF0aW9uYWxOdW1iZXI6IG51bWJlciA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5OQVRJT05BTCkgOiAnJyxcclxuXHRcdFx0XHRjb3VudHJ5Q29kZTogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMi50b1VwcGVyQ2FzZSgpXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVsLmZvY3VzKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25JbnB1dEtleVByZXNzKGV2ZW50KTogdm9pZCB7XHJcblx0XHRjb25zdCBwYXR0ZXJuID0gL1swLTlcXCtcXC1cXCBdLztcclxuXHRcdGNvbnN0IGlucHV0Q2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQuY2hhckNvZGUpO1xyXG5cdFx0aWYgKCFwYXR0ZXJuLnRlc3QoaW5wdXRDaGFyKSkge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGZldGNoQ291bnRyeURhdGEoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvdW50cnlDb2RlRGF0YS5hbGxDb3VudHJpZXMuZm9yRWFjaChjID0+IHtcclxuXHRcdFx0Y29uc3QgY291bnRyeTogQ291bnRyeSA9IHtcclxuXHRcdFx0XHRuYW1lOiBjWzBdLnRvU3RyaW5nKCksXHJcblx0XHRcdFx0aXNvMjogY1sxXS50b1N0cmluZygpLFxyXG5cdFx0XHRcdGRpYWxDb2RlOiBjWzJdLnRvU3RyaW5nKCksXHJcblx0XHRcdFx0cHJpb3JpdHk6ICtjWzNdIHx8IDAsXHJcblx0XHRcdFx0YXJlYUNvZGVzOiBjWzRdIGFzIHN0cmluZ1tdIHx8IHVuZGVmaW5lZCxcclxuXHRcdFx0XHRmbGFnQ2xhc3M6IGNbMV0udG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSgpLFxyXG5cdFx0XHRcdHBsYWNlSG9sZGVyOiAnJ1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuZW5hYmxlUGxhY2Vob2xkZXIpIHtcclxuXHRcdFx0XHRjb3VudHJ5LnBsYWNlSG9sZGVyID0gdGhpcy5nZXRQaG9uZU51bWJlclBsYWNlSG9sZGVyKGNvdW50cnkuaXNvMi50b1VwcGVyQ2FzZSgpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hbGxDb3VudHJpZXMucHVzaChjb3VudHJ5KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGdldFBob25lTnVtYmVyUGxhY2VIb2xkZXIoY291bnRyeUNvZGU6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5waG9uZVV0aWwuZm9ybWF0KHRoaXMucGhvbmVVdGlsLmdldEV4YW1wbGVOdW1iZXIoY291bnRyeUNvZGUpLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTCk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHJldHVybiBlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG5cdH1cclxuXHJcblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcclxuXHR9XHJcblxyXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0dGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcblx0fVxyXG5cclxuXHR3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcblx0XHRpZiAob2JqKSB7XHJcblx0XHRcdHRoaXMucGhvbmVOdW1iZXIgPSBvYmo7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMub25QaG9uZU51bWJlckNoYW5nZSgpO1xyXG5cdFx0XHR9LCAxKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0Q291bnRyeUlzb0NvZGUoY291bnRyeUNvZGU6IG51bWJlciwgbnVtYmVyOiBscG4uUGhvbmVOdW1iZXIpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG5cdFx0Ly8gV2lsbCB1c2UgdGhpcyB0byBtYXRjaCBhcmVhIGNvZGUgZnJvbSB0aGUgZmlyc3QgbnVtYmVyc1xyXG5cdFx0Y29uc3QgcmF3TnVtYmVyID0gbnVtYmVyLnZhbHVlc19bJzInXS50b1N0cmluZygpO1xyXG5cdFx0Ly8gTGlzdCBvZiBhbGwgY291bnRyaWVzIHdpdGggY291bnRyeUNvZGUgKGNhbiBiZSBtb3JlIHRoYW4gb25lLiBlLnguIFVTLCBDQSwgRE8sIFBSIGFsbCBoYXZlICsxIGNvdW50cnlDb2RlKVxyXG5cdFx0Y29uc3QgY291bnRyaWVzID0gdGhpcy5hbGxDb3VudHJpZXMuZmlsdGVyKGMgPT4gYy5kaWFsQ29kZSA9PT0gY291bnRyeUNvZGUudG9TdHJpbmcoKSk7XHJcblx0XHQvLyBNYWluIGNvdW50cnkgaXMgdGhlIGNvdW50cnksIHdoaWNoIGhhcyBubyBhcmVhQ29kZXMgc3BlY2lmaWVkIGluIGNvdW50cnktY29kZS50cyBmaWxlLlxyXG5cdFx0Y29uc3QgbWFpbkNvdW50cnkgPSBjb3VudHJpZXMuZmluZChjID0+IGMuYXJlYUNvZGVzID09PSB1bmRlZmluZWQpO1xyXG5cdFx0Ly8gU2Vjb25kYXJ5IGNvdW50cmllcyBhcmUgYWxsIGNvdW50cmllcywgd2hpY2ggaGF2ZSBhcmVhQ29kZXMgc3BlY2lmaWVkIGluIGNvdW50cnktY29kZS50cyBmaWxlLlxyXG5cdFx0Y29uc3Qgc2Vjb25kYXJ5Q291bnRyaWVzID0gY291bnRyaWVzLmZpbHRlcihjID0+IGMuYXJlYUNvZGVzICE9PSB1bmRlZmluZWQpO1xyXG5cdFx0bGV0IG1hdGNoZWRDb3VudHJ5ID0gbWFpbkNvdW50cnkgPyBtYWluQ291bnRyeS5pc28yIDogdW5kZWZpbmVkO1xyXG5cclxuXHRcdC8qXHJcblx0XHRcdEludGVyYXRlIG92ZXIgZWFjaCBzZWNvbmRhcnkgY291bnRyeSBhbmQgY2hlY2sgaWYgbmF0aW9uYWxOdW1iZXIgc3RhcnRzIHdpdGggYW55IG9mIGFyZWFDb2RlcyBhdmFpbGFibGUuXHJcblx0XHRcdElmIG5vIG1hdGNoZXMgZm91bmQsIGZhbGxiYWNrIHRvIHRoZSBtYWluIGNvdW50cnkuXHJcblx0XHQqL1xyXG5cdFx0c2Vjb25kYXJ5Q291bnRyaWVzLmZvckVhY2goY291bnRyeSA9PiB7XHJcblx0XHRcdGNvdW50cnkuYXJlYUNvZGVzLmZvckVhY2goYXJlYUNvZGUgPT4ge1xyXG5cdFx0XHRcdGlmIChyYXdOdW1iZXIuc3RhcnRzV2l0aChhcmVhQ29kZSkpIHtcclxuXHRcdFx0XHRcdG1hdGNoZWRDb3VudHJ5ID0gY291bnRyeS5pc28yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gbWF0Y2hlZENvdW50cnk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=