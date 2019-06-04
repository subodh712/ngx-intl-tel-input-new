/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as lpn from 'google-libphonenumber';
/** @type {?} */
export var phoneNumberValidator = function (control) {
    /** @type {?} */
    var isRequired = control.errors && control.errors.required === true;
    /** @type {?} */
    var error = { validatePhoneNumber: { valid: false } };
    /** @type {?} */
    var number;
    try {
        number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
    }
    catch (e) {
        if (isRequired === true) {
            return error;
        }
    }
    if (control.value) {
        if (!number) {
            return error;
        }
        else {
            if (!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                return error;
            }
        }
    }
    return;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtaW50bC10ZWwtaW5wdXQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDOztBQUU3QyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsVUFBQyxPQUFvQjs7UUFDbEQsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSTs7UUFDL0QsS0FBSyxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7O1FBQ25ELE1BQXVCO0lBRTNCLElBQUk7UUFDSCxNQUFNLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNsRztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1gsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTtLQUMxQztJQUVELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtRQUNsQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDYjthQUFNO1lBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2pHLE9BQU8sS0FBSyxDQUFDO2FBQ2I7U0FDRDtLQUNEO0lBRUQsT0FBTztBQUNSLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0ICogYXMgbHBuIGZyb20gJ2dvb2dsZS1saWJwaG9uZW51bWJlcic7XHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVOdW1iZXJWYWxpZGF0b3IgPSAoY29udHJvbDogRm9ybUNvbnRyb2wpID0+IHtcclxuXHRjb25zdCBpc1JlcXVpcmVkID0gY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnMucmVxdWlyZWQgPT09IHRydWU7XHJcblx0Y29uc3QgZXJyb3IgPSB7IHZhbGlkYXRlUGhvbmVOdW1iZXI6IHsgdmFsaWQ6IGZhbHNlIH0gfTtcclxuXHRsZXQgbnVtYmVyOiBscG4uUGhvbmVOdW1iZXI7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRudW1iZXIgPSBscG4uUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoY29udHJvbC52YWx1ZS5udW1iZXIsIGNvbnRyb2wudmFsdWUuY291bnRyeUNvZGUpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdGlmIChpc1JlcXVpcmVkID09PSB0cnVlKSB7IHJldHVybiBlcnJvcjsgfVxyXG5cdH1cclxuXHJcblx0aWYgKGNvbnRyb2wudmFsdWUpIHtcclxuXHRcdGlmICghbnVtYmVyKSB7XHJcblx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghbHBuLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLmlzVmFsaWROdW1iZXJGb3JSZWdpb24obnVtYmVyLCBjb250cm9sLnZhbHVlLmNvdW50cnlDb2RlKSkge1xyXG5cdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuO1xyXG59O1xyXG4iXX0=