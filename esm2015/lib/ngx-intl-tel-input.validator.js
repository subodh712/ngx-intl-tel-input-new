/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as lpn from 'google-libphonenumber';
/** @type {?} */
export const phoneNumberValidator = (control) => {
    /** @type {?} */
    const isRequired = control.errors && control.errors.required === true;
    /** @type {?} */
    const error = { validatePhoneNumber: { valid: false } };
    /** @type {?} */
    let number;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtaW50bC10ZWwtaW5wdXQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDOztBQUU3QyxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsQ0FBQyxPQUFvQixFQUFFLEVBQUU7O1VBQ3RELFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUk7O1VBQy9ELEtBQUssR0FBRyxFQUFFLG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFOztRQUNuRCxNQUF1QjtJQUUzQixJQUFJO1FBQ0gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDbEc7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNYLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1NBQUU7S0FDMUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNaLE9BQU8sS0FBSyxDQUFDO1NBQ2I7YUFBTTtZQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNqRyxPQUFPLEtBQUssQ0FBQzthQUNiO1NBQ0Q7S0FDRDtJQUVELE9BQU87QUFDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAqIGFzIGxwbiBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBob25lTnVtYmVyVmFsaWRhdG9yID0gKGNvbnRyb2w6IEZvcm1Db250cm9sKSA9PiB7XHJcblx0Y29uc3QgaXNSZXF1aXJlZCA9IGNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzLnJlcXVpcmVkID09PSB0cnVlO1xyXG5cdGNvbnN0IGVycm9yID0geyB2YWxpZGF0ZVBob25lTnVtYmVyOiB7IHZhbGlkOiBmYWxzZSB9IH07XHJcblx0bGV0IG51bWJlcjogbHBuLlBob25lTnVtYmVyO1xyXG5cclxuXHR0cnkge1xyXG5cdFx0bnVtYmVyID0gbHBuLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLnBhcnNlKGNvbnRyb2wudmFsdWUubnVtYmVyLCBjb250cm9sLnZhbHVlLmNvdW50cnlDb2RlKTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRpZiAoaXNSZXF1aXJlZCA9PT0gdHJ1ZSkgeyByZXR1cm4gZXJyb3I7IH1cclxuXHR9XHJcblxyXG5cdGlmIChjb250cm9sLnZhbHVlKSB7XHJcblx0XHRpZiAoIW51bWJlcikge1xyXG5cdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoIWxwbi5QaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKS5pc1ZhbGlkTnVtYmVyRm9yUmVnaW9uKG51bWJlciwgY29udHJvbC52YWx1ZS5jb3VudHJ5Q29kZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybjtcclxufTtcclxuIl19