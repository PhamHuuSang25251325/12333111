export default {
    required: value => value ? undefined : 'Trường bắt buộc nhập',
    number: value => value && isNaN(Number(value)) ? 'Trường này phải là số' : undefined,
    isValidEmail: value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Email sai định dạng' : undefined
}