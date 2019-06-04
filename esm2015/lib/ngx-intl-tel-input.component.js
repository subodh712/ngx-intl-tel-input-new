/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CountryCode } from './data/country-code';
import { phoneNumberValidator } from './ngx-intl-tel-input.validator';
import * as lpn from 'google-libphonenumber';
const ɵ0 = phoneNumberValidator;
export class NgxIntlTelInputComponent {
    /**
     * @param {?} countryCodeData
     */
    constructor(countryCodeData) {
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
        this.onTouched = () => { };
        this.propagateChange = (_) => { };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fetchCountryData();
        if (this.preferredCountries.length) {
            this.preferredCountries.forEach(iso2 => {
                /** @type {?} */
                const preferredCountry = this.allCountries.filter((c) => {
                    return c.iso2 === iso2;
                });
                this.preferredCountriesInDropDown.push(preferredCountry[0]);
            });
        }
        if (this.onlyCountries.length) {
            this.allCountries = this.allCountries.filter(c => this.onlyCountries.includes(c.iso2));
        }
        if (this.preferredCountriesInDropDown.length) {
            this.selectedCountry = this.preferredCountriesInDropDown[0];
        }
        else {
            this.selectedCountry = this.allCountries[0];
        }
    }
    /**
     * @return {?}
     */
    onPhoneNumberChange() {
        this.value = this.phoneNumber;
        /** @type {?} */
        let number;
        try {
            number = this.phoneUtil.parse(this.phoneNumber, this.selectedCountry.iso2.toUpperCase());
        }
        catch (e) {
        }
        /** @type {?} */
        let countryCode = this.selectedCountry.iso2;
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            countryCode = number && number.getCountryCode()
                ? this.getCountryIsoCode(number.getCountryCode(), number)
                : this.selectedCountry.iso2;
            if (countryCode !== this.selectedCountry.iso2) {
                /** @type {?} */
                const newCountry = this.allCountries.find(c => c.iso2 === countryCode);
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
    }
    /**
     * @param {?} country
     * @param {?} el
     * @return {?}
     */
    onCountrySelect(country, el) {
        this.selectedCountry = country;
        if (this.phoneNumber.length > 0) {
            this.value = this.phoneNumber;
            /** @type {?} */
            let number;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInputKeyPress(event) {
        /** @type {?} */
        const pattern = /[0-9\+\-\ ]/;
        /** @type {?} */
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    fetchCountryData() {
        this.countryCodeData.allCountries.forEach(c => {
            /** @type {?} */
            const country = {
                name: c[0].toString(),
                iso2: c[1].toString(),
                dialCode: c[2].toString(),
                priority: +c[3] || 0,
                areaCodes: (/** @type {?} */ (c[4])) || undefined,
                flagClass: c[1].toString().toLocaleLowerCase(),
                placeHolder: ''
            };
            if (this.enablePlaceholder) {
                country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
            }
            this.allCountries.push(country);
        });
    }
    /**
     * @protected
     * @param {?} countryCode
     * @return {?}
     */
    getPhoneNumberPlaceHolder(countryCode) {
        try {
            return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat.INTERNATIONAL);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj) {
            this.phoneNumber = obj;
            setTimeout(() => {
                this.onPhoneNumberChange();
            }, 1);
        }
    }
    /**
     * @private
     * @param {?} countryCode
     * @param {?} number
     * @return {?}
     */
    getCountryIsoCode(countryCode, number) {
        // Will use this to match area code from the first numbers
        /** @type {?} */
        const rawNumber = number.values_['2'].toString();
        // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
        /** @type {?} */
        const countries = this.allCountries.filter(c => c.dialCode === countryCode.toString());
        // Main country is the country, which has no areaCodes specified in country-code.ts file.
        /** @type {?} */
        const mainCountry = countries.find(c => c.areaCodes === undefined);
        // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
        /** @type {?} */
        const secondaryCountries = countries.filter(c => c.areaCodes !== undefined);
        /** @type {?} */
        let matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
        /*
            Interate over each secondary country and check if nationalNumber starts with any of areaCodes available.
            If no matches found, fallback to the main country.
        */
        secondaryCountries.forEach(country => {
            country.areaCodes.forEach(areaCode => {
                if (rawNumber.startsWith(areaCode)) {
                    matchedCountry = country.iso2;
                }
            });
        });
        return matchedCountry;
    }
}
NgxIntlTelInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-intl-tel-input',
                template: "<div class=\"intl-tel-input allow-dropdown\">\r\n  <div class=\"flag-container\" dropdown [ngClass]=\"{'disabled': disabled}\">\r\n    <div class=\"selected-flag dropdown-toggle\" dropdownToggle>\r\n      <div class=\"iti-flag\" [ngClass]=\"selectedCountry.flagClass\"></div>\r\n      <div class=\"iti-arrow\"></div>\r\n    </div>\r\n    <ul class=\"country-list dropdown-menu\" *dropdownMenu>\r\n      <li class=\"country\" *ngFor=\"let country of preferredCountriesInDropDown\" (click)=\"onCountrySelect(country, focusable)\">\r\n        <div class=\"flag-box\">\r\n          <div class=\"iti-flag\" [ngClass]=\"country.flagClass\"></div>\r\n        </div>\r\n        <span class=\"country-name\">{{country.name}}</span>\r\n        <span class=\"dial-code\">+{{country.dialCode}}</span>\r\n      </li>\r\n      <li class=\"divider\" *ngIf=\"preferredCountriesInDropDown?.length\"></li>\r\n      <li class=\"country\" *ngFor=\"let country of allCountries\" (click)=\"onCountrySelect(country, focusable)\">\r\n        <div class=\"flag-box\">\r\n          <div class=\"iti-flag\" [ngClass]=\"country.flagClass\"></div>\r\n        </div>\r\n        <span class=\"country-name\">{{country.name}}</span>\r\n        <span class=\"dial-code\">+{{country.dialCode}}</span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <input type=\"tel\" id=\"phone\" autocomplete=\"off\"\r\n        [ngClass]=\"cssClass\"\r\n        (blur)=\"onTouched()\"\r\n        (keypress)=\"onInputKeyPress($event)\"\r\n        [(ngModel)]=\"phoneNumber\"\r\n        (ngModelChange)=\"onPhoneNumberChange()\"\r\n        [disabled]=\"disabled\"\r\n        [placeholder]=\"selectedCountry.placeHolder\" #focusable>\r\n</div>\r\n",
                providers: [
                    CountryCode,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        // tslint:disable-next-line:no-forward-ref
                        useExisting: forwardRef(() => NgxIntlTelInputComponent),
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
NgxIntlTelInputComponent.ctorParameters = () => [
    { type: CountryCode }
];
NgxIntlTelInputComponent.propDecorators = {
    value: [{ type: Input }],
    preferredCountries: [{ type: Input }],
    enablePlaceholder: [{ type: Input }],
    cssClass: [{ type: Input }],
    onlyCountries: [{ type: Input }],
    enableAutoCountrySelect: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUF3QixhQUFhLEVBQUUsaUJBQWlCLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEUsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztXQWdCaEMsb0JBQW9CO0FBS2pDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFxQnBDLFlBQ1MsZUFBNEI7UUFBNUIsb0JBQWUsR0FBZixlQUFlLENBQWE7UUFwQjVCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCx1QkFBa0IsR0FBa0IsRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixhQUFRLEdBQUcsY0FBYyxDQUFDO1FBQzFCLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyw0QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFFekMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBbUIsRUFBRSxDQUFDO1FBQ2xDLGlDQUE0QixHQUFtQixFQUFFLENBQUM7UUFFbEQsY0FBUyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQWUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBR25ELGNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENB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O2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7c0NBQ0wsS0FBSzs7OztJQUxOLHlDQUFvQjs7SUFDcEIsc0RBQWdEOztJQUNoRCxxREFBa0M7O0lBQ2xDLDRDQUFtQzs7SUFDbkMsaURBQTJDOztJQUMzQywyREFBeUM7O0lBRXpDLCtDQUFpQjs7SUFDakIsZ0RBQWtDOztJQUNsQyxnRUFBa0Q7O0lBQ2xELG1EQUF5Qjs7SUFDekIsNkNBQThDOztJQUM5Qyw0Q0FBaUI7O0lBQ2pCLDBDQUFtRDs7SUFHbkQsNkNBQXNCOztJQUN0QixtREFBa0M7Ozs7O0lBR2pDLG1EQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb3VudHJ5Q29kZSB9IGZyb20gJy4vZGF0YS9jb3VudHJ5LWNvZGUnO1xyXG5pbXBvcnQgeyBwaG9uZU51bWJlclZhbGlkYXRvciB9IGZyb20gJy4vbmd4LWludGwtdGVsLWlucHV0LnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tICcuL21vZGVsL2NvdW50cnkubW9kZWwnO1xyXG5pbXBvcnQgKiBhcyBscG4gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbmd4LWludGwtdGVsLWlucHV0JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vbmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50LmNzcyddLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Q291bnRyeUNvZGUsXHJcblx0XHR7XHJcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZm9yd2FyZC1yZWZcclxuXHRcdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4SW50bFRlbElucHV0Q29tcG9uZW50KSxcclxuXHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcblx0XHRcdHVzZVZhbHVlOiBwaG9uZU51bWJlclZhbGlkYXRvcixcclxuXHRcdFx0bXVsdGk6IHRydWUsXHJcblx0XHR9XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4SW50bFRlbElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QElucHV0KCkgdmFsdWUgPSAnJztcclxuXHRASW5wdXQoKSBwcmVmZXJyZWRDb3VudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHRASW5wdXQoKSBlbmFibGVQbGFjZWhvbGRlciA9IHRydWU7XHJcblx0QElucHV0KCkgY3NzQ2xhc3MgPSAnZm9ybS1jb250cm9sJztcclxuXHRASW5wdXQoKSBvbmx5Q291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblx0QElucHV0KCkgZW5hYmxlQXV0b0NvdW50cnlTZWxlY3QgPSBmYWxzZTtcclxuXHJcblx0cGhvbmVOdW1iZXIgPSAnJztcclxuXHRhbGxDb3VudHJpZXM6IEFycmF5PENvdW50cnk+ID0gW107XHJcblx0cHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93bjogQXJyYXk8Q291bnRyeT4gPSBbXTtcclxuXHRzZWxlY3RlZENvdW50cnk6IENvdW50cnk7XHJcblx0cGhvbmVVdGlsID0gbHBuLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xyXG5cdGRpc2FibGVkID0gZmFsc2U7XHJcblx0ZXJyb3JzOiBBcnJheTxhbnk+ID0gWydQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQuJ107XHJcblxyXG5cclxuXHRvblRvdWNoZWQgPSAoKSA9PiB7IH07XHJcblx0cHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY291bnRyeUNvZGVEYXRhOiBDb3VudHJ5Q29kZVxyXG5cdCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblxyXG5cdFx0dGhpcy5mZXRjaENvdW50cnlEYXRhKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLnByZWZlcnJlZENvdW50cmllcy5mb3JFYWNoKGlzbzIgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHByZWZlcnJlZENvdW50cnkgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoKGMpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBjLmlzbzIgPT09IGlzbzI7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93bi5wdXNoKHByZWZlcnJlZENvdW50cnlbMF0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLm9ubHlDb3VudHJpZXMubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuYWxsQ291bnRyaWVzID0gdGhpcy5hbGxDb3VudHJpZXMuZmlsdGVyKGMgPT4gdGhpcy5vbmx5Q291bnRyaWVzLmluY2x1ZGVzKGMuaXNvMikpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93bi5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZENvdW50cnkgPSB0aGlzLnByZWZlcnJlZENvdW50cmllc0luRHJvcERvd25bMF07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkQ291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzWzBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG9uUGhvbmVOdW1iZXJDaGFuZ2UoKTogdm9pZCB7XHJcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5waG9uZU51bWJlcjtcclxuXHJcblx0XHRsZXQgbnVtYmVyOiBscG4uUGhvbmVOdW1iZXI7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRudW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZSh0aGlzLnBob25lTnVtYmVyLCB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yLnRvVXBwZXJDYXNlKCkpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBjb3VudHJ5Q29kZSA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzI7XHJcblx0XHQvLyBhdXRvIHNlbGVjdCBjb3VudHJ5IGJhc2VkIG9uIHRoZSBleHRlbnNpb24gKGFuZCBhcmVhQ29kZSBpZiBuZWVkZWQpIChlLmcgc2VsZWN0IENhbmFkYSBpZiBudW1iZXIgc3RhcnRzIHdpdGggKzEgNDE2KVxyXG5cdFx0aWYgKHRoaXMuZW5hYmxlQXV0b0NvdW50cnlTZWxlY3QpIHtcclxuXHRcdFx0Y291bnRyeUNvZGUgPSBudW1iZXIgJiYgbnVtYmVyLmdldENvdW50cnlDb2RlKClcclxuXHRcdFx0XHQ/IHRoaXMuZ2V0Q291bnRyeUlzb0NvZGUobnVtYmVyLmdldENvdW50cnlDb2RlKCksIG51bWJlcilcclxuXHRcdFx0XHQ6IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzI7XHJcblx0XHRcdGlmIChjb3VudHJ5Q29kZSAhPT0gdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMikge1xyXG5cdFx0XHRcdGNvbnN0IG5ld0NvdW50cnkgPSB0aGlzLmFsbENvdW50cmllcy5maW5kKGMgPT4gYy5pc28yID09PSBjb3VudHJ5Q29kZSk7XHJcblx0XHRcdFx0aWYgKG5ld0NvdW50cnkpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gbmV3Q291bnRyeTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGNvdW50cnlDb2RlID0gY291bnRyeUNvZGUgPyBjb3VudHJ5Q29kZSA6IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzI7XHJcblxyXG5cdFx0aWYgKCF0aGlzLnZhbHVlKSB7XHJcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1udWxsLWtleXdvcmRcclxuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UobnVsbCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XHJcblx0XHRcdFx0bnVtYmVyOiB0aGlzLnZhbHVlLFxyXG5cdFx0XHRcdGludGVybmF0aW9uYWxOdW1iZXI6IG51bWJlciA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKSA6ICcnLFxyXG5cdFx0XHRcdG5hdGlvbmFsTnVtYmVyOiBudW1iZXIgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpIDogJycsXHJcblx0XHRcdFx0Y291bnRyeUNvZGU6IGNvdW50cnlDb2RlLnRvVXBwZXJDYXNlKClcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25Db3VudHJ5U2VsZWN0KGNvdW50cnk6IENvdW50cnksIGVsKTogdm9pZCB7XHJcblx0XHR0aGlzLnNlbGVjdGVkQ291bnRyeSA9IGNvdW50cnk7XHJcblxyXG5cdFx0aWYgKHRoaXMucGhvbmVOdW1iZXIubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5waG9uZU51bWJlcjtcclxuXHJcblx0XHRcdGxldCBudW1iZXI6IGxwbi5QaG9uZU51bWJlcjtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRudW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZSh0aGlzLnBob25lTnVtYmVyLCB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yLnRvVXBwZXJDYXNlKCkpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKHtcclxuXHRcdFx0XHRudW1iZXI6IHRoaXMudmFsdWUsXHJcblx0XHRcdFx0aW50ZXJuYXRpb25hbE51bWJlcjogbnVtYmVyID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpIDogJycgLFxyXG5cdFx0XHRcdG5hdGlvbmFsTnVtYmVyOiBudW1iZXIgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpIDogJycsXHJcblx0XHRcdFx0Y291bnRyeUNvZGU6IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIudG9VcHBlckNhc2UoKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRlbC5mb2N1cygpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG9uSW5wdXRLZXlQcmVzcyhldmVudCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgcGF0dGVybiA9IC9bMC05XFwrXFwtXFwgXS87XHJcblx0XHRjb25zdCBpbnB1dENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmNoYXJDb2RlKTtcclxuXHRcdGlmICghcGF0dGVybi50ZXN0KGlucHV0Q2hhcikpIHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBmZXRjaENvdW50cnlEYXRhKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb3VudHJ5Q29kZURhdGEuYWxsQ291bnRyaWVzLmZvckVhY2goYyA9PiB7XHJcblx0XHRcdGNvbnN0IGNvdW50cnk6IENvdW50cnkgPSB7XHJcblx0XHRcdFx0bmFtZTogY1swXS50b1N0cmluZygpLFxyXG5cdFx0XHRcdGlzbzI6IGNbMV0udG9TdHJpbmcoKSxcclxuXHRcdFx0XHRkaWFsQ29kZTogY1syXS50b1N0cmluZygpLFxyXG5cdFx0XHRcdHByaW9yaXR5OiArY1szXSB8fCAwLFxyXG5cdFx0XHRcdGFyZWFDb2RlczogY1s0XSBhcyBzdHJpbmdbXSB8fCB1bmRlZmluZWQsXHJcblx0XHRcdFx0ZmxhZ0NsYXNzOiBjWzFdLnRvU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UoKSxcclxuXHRcdFx0XHRwbGFjZUhvbGRlcjogJydcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmICh0aGlzLmVuYWJsZVBsYWNlaG9sZGVyKSB7XHJcblx0XHRcdFx0Y291bnRyeS5wbGFjZUhvbGRlciA9IHRoaXMuZ2V0UGhvbmVOdW1iZXJQbGFjZUhvbGRlcihjb3VudHJ5LmlzbzIudG9VcHBlckNhc2UoKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYWxsQ291bnRyaWVzLnB1c2goY291bnRyeSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBnZXRQaG9uZU51bWJlclBsYWNlSG9sZGVyKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucGhvbmVVdGlsLmZvcm1hdCh0aGlzLnBob25lVXRpbC5nZXRFeGFtcGxlTnVtYmVyKGNvdW50cnlDb2RlKSwgbHBuLlBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRyZXR1cm4gZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XHJcblx0fVxyXG5cclxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG5cdH1cclxuXHJcblx0d3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG5cdFx0aWYgKG9iaikge1xyXG5cdFx0XHR0aGlzLnBob25lTnVtYmVyID0gb2JqO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm9uUGhvbmVOdW1iZXJDaGFuZ2UoKTtcclxuXHRcdFx0fSwgMSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldENvdW50cnlJc29Db2RlKGNvdW50cnlDb2RlOiBudW1iZXIsIG51bWJlcjogbHBuLlBob25lTnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuXHRcdC8vIFdpbGwgdXNlIHRoaXMgdG8gbWF0Y2ggYXJlYSBjb2RlIGZyb20gdGhlIGZpcnN0IG51bWJlcnNcclxuXHRcdGNvbnN0IHJhd051bWJlciA9IG51bWJlci52YWx1ZXNfWycyJ10udG9TdHJpbmcoKTtcclxuXHRcdC8vIExpc3Qgb2YgYWxsIGNvdW50cmllcyB3aXRoIGNvdW50cnlDb2RlIChjYW4gYmUgbW9yZSB0aGFuIG9uZS4gZS54LiBVUywgQ0EsIERPLCBQUiBhbGwgaGF2ZSArMSBjb3VudHJ5Q29kZSlcclxuXHRcdGNvbnN0IGNvdW50cmllcyA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcihjID0+IGMuZGlhbENvZGUgPT09IGNvdW50cnlDb2RlLnRvU3RyaW5nKCkpO1xyXG5cdFx0Ly8gTWFpbiBjb3VudHJ5IGlzIHRoZSBjb3VudHJ5LCB3aGljaCBoYXMgbm8gYXJlYUNvZGVzIHNwZWNpZmllZCBpbiBjb3VudHJ5LWNvZGUudHMgZmlsZS5cclxuXHRcdGNvbnN0IG1haW5Db3VudHJ5ID0gY291bnRyaWVzLmZpbmQoYyA9PiBjLmFyZWFDb2RlcyA9PT0gdW5kZWZpbmVkKTtcclxuXHRcdC8vIFNlY29uZGFyeSBjb3VudHJpZXMgYXJlIGFsbCBjb3VudHJpZXMsIHdoaWNoIGhhdmUgYXJlYUNvZGVzIHNwZWNpZmllZCBpbiBjb3VudHJ5LWNvZGUudHMgZmlsZS5cclxuXHRcdGNvbnN0IHNlY29uZGFyeUNvdW50cmllcyA9IGNvdW50cmllcy5maWx0ZXIoYyA9PiBjLmFyZWFDb2RlcyAhPT0gdW5kZWZpbmVkKTtcclxuXHRcdGxldCBtYXRjaGVkQ291bnRyeSA9IG1haW5Db3VudHJ5ID8gbWFpbkNvdW50cnkuaXNvMiA6IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvKlxyXG5cdFx0XHRJbnRlcmF0ZSBvdmVyIGVhY2ggc2Vjb25kYXJ5IGNvdW50cnkgYW5kIGNoZWNrIGlmIG5hdGlvbmFsTnVtYmVyIHN0YXJ0cyB3aXRoIGFueSBvZiBhcmVhQ29kZXMgYXZhaWxhYmxlLlxyXG5cdFx0XHRJZiBubyBtYXRjaGVzIGZvdW5kLCBmYWxsYmFjayB0byB0aGUgbWFpbiBjb3VudHJ5LlxyXG5cdFx0Ki9cclxuXHRcdHNlY29uZGFyeUNvdW50cmllcy5mb3JFYWNoKGNvdW50cnkgPT4ge1xyXG5cdFx0XHRjb3VudHJ5LmFyZWFDb2Rlcy5mb3JFYWNoKGFyZWFDb2RlID0+IHtcclxuXHRcdFx0XHRpZiAocmF3TnVtYmVyLnN0YXJ0c1dpdGgoYXJlYUNvZGUpKSB7XHJcblx0XHRcdFx0XHRtYXRjaGVkQ291bnRyeSA9IGNvdW50cnkuaXNvMjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIG1hdGNoZWRDb3VudHJ5O1xyXG5cdH1cclxuXHJcbn1cclxuIl19