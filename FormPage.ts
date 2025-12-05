export class FormPage {
    private page: any;

    constructor(formSelector: string) {
        this.userFullNameInput = `${formSelector} input[name="userName"]`;
        this.emailInput = `${formSelector} input[name="userEmail"]`;
        this.currentAddressInput = `${formSelector} textarea[name="currentAddress"]`;
        this.permanentAddressInput = `${formSelector} textarea[name="permanentAddress"]`;
        this.submitButton = `${formSelector} button[type="submit"]`;
    }

    async submitForm(userFullName: string, email: string, currentAddress: string, permanentAddress: string ) {  
        await this.page.fill(this.userFullNameInput, 'John Doe');
        await this.page.fill(this.emailInput, 'john.doe@example.com'); 
        await this.page.fill(this.currentAddressInput, '123 Main St');
        await this.page.fill(this.permanentAddressInput, '456 Secondary St');
        await this.page.click(this.submitButton);
    }
}