import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-add-testimonials-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
      (click)="onCancel()"
    >
      <div
        class="bg-white rounded shadow-lg w-full max-w-[767px] max-h-[95vh] flex flex-col"
        (click)="$event.stopPropagation()"
      >
        <!-- Header -->
        <div class="flex-shrink-0 px-[30px] py-[30px]">
          <div class="flex items-center justify-between">
            <h2 class="text-[22px] font-medium text-[#3F4254]">
              {{ editMode ? "Edit Testimonial" : "Add Testimonial" }}
            </h2>
            <button
              type="button"
              (click)="onCancel()"
              class="text-[#3F4254] hover:text-[#212529] transition-colors"
              aria-label="Close modal"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M0.929495 18C0.692391 18 0.455286 17.9099 0.275141 17.7284C-0.0865054 17.3667 -0.0865054 16.7804 0.275141 16.4187L16.4227 0.271235C16.7843 -0.0904116 17.3706 -0.0904116 17.7323 0.271235C18.0939 0.632881 18.0939 1.2192 17.7323 1.58107L1.58498 17.7284C1.40348 17.9087 1.16637 18 0.929495 18Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.0781 18C16.841 18 16.6042 17.9099 16.4238 17.7284L0.275141 1.58107C-0.0865054 1.2192 -0.0865054 0.632881 0.275141 0.271235C0.636787 -0.0904116 1.22311 -0.0904116 1.58498 0.271235L17.7323 16.4187C18.0939 16.7804 18.0939 17.3667 17.7323 17.7284C17.5508 17.9087 17.3139 18 17.0781 18Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        <!-- Body -->
        <form class="flex-1 flex flex-col min-h-0" (ngSubmit)="onSubmit()">
          <div class="flex-1 overflow-y-auto px-[30px] pb-6 min-h-0">
            <!-- Name Field -->
            <div class="mb-[30px]">
              <label class="block text-base font-medium text-[#212529] mb-2">
                Name
              </label>
              <input
                type="text"
                [(ngModel)]="formData.name"
                name="name"
                placeholder="Enter name"
                class="w-full h-[50px] px-4 border-2 border-[#E9EBEC] rounded text-[#434349] text-base placeholder-[#C2C3CB] focus:outline-none focus:border-[#009FD8] transition-colors"
              />
            </div>

            <!-- Designation Field -->
            <div class="mb-[30px]">
              <label class="block text-base font-medium text-[#212529] mb-2">
                Designation
              </label>
              <input
                type="text"
                [(ngModel)]="formData.designation"
                name="designation"
                placeholder="Enter designation"
                class="w-full h-[50px] px-4 border-2 border-[#E9EBEC] rounded text-[#434349] text-base placeholder-[#C2C3CB] focus:outline-none focus:border-[#009FD8] transition-colors"
              />
            </div>

            <!-- Testimonial Text -->
            <div class="mb-[30px]">
              <label class="block text-base font-medium text-[#212529] mb-2">
                Testimonial
              </label>
              <textarea
                [(ngModel)]="formData.testimonial"
                name="testimonial"
                placeholder="Enter testimonial"
                rows="5"
                class="w-full px-4 py-3 border-2 border-[#E9EBEC] rounded text-[#434349] text-base placeholder-[#C2C3CB] focus:outline-none focus:border-[#009FD8] transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Rating Field -->
            <div class="mb-[30px]">
              <label class="block text-base font-medium text-[#212529] mb-2">
                Rating
              </label>
              <div class="relative">
                <select
                  [(ngModel)]="formData.rating"
                  name="rating"
                  class="w-full h-[50px] px-4 pr-10 border-2 border-[#E9EBEC] rounded text-[#434349] text-base focus:outline-none focus:border-[#009FD8] appearance-none bg-white transition-colors"
                >
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
                <svg
                  class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.19396 0.193108C8.45431 -0.0643956 8.87642 -0.0643956 9.13677 0.193108C9.39712 0.450612 9.39712 0.868109 9.13677 1.12561L5.13677 5.0819C4.88438 5.33152 4.47799 5.34026 4.21488 5.10171L0.214881 1.47512C-0.0565313 1.22904 -0.0748657 0.811938 0.173929 0.543491C0.422723 0.275045 0.844435 0.25691 1.11585 0.502986L4.64531 3.70297L8.19396 0.193108Z"
                    fill="#434349"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div
            class="flex-shrink-0 flex items-center justify-end gap-4 px-[30px] py-6 border-t border-[#CED4DA]"
          >
            <button
              type="button"
              (click)="onCancel()"
              class="flex items-center justify-center gap-3 h-9 px-[17px] rounded bg-[#DEE1EB] hover:bg-[#CED1DB] transition-colors"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_close)">
                  <path
                    d="M0.620965 12C0.462896 12 0.304826 11.9399 0.184729 11.8189C-0.0563682 11.5778 -0.0563682 11.1869 0.184729 10.9458L10.9497 0.180823C11.1908 -0.0602744 11.5817 -0.0602744 11.8228 0.180823C12.0639 0.421921 12.0639 0.8128 11.8228 1.05405L1.05795 11.8189C0.936954 11.9392 0.778884 12 0.620965 12Z"
                    fill="#4C546C"
                  />
                  <path
                    d="M11.3867 12C11.2287 12 11.0707 11.9399 10.9505 11.8189L0.184729 1.05405C-0.0563682 0.8128 -0.0563682 0.421921 0.184729 0.180823C0.425827 -0.0602744 0.816707 -0.0602744 1.05795 0.180823L11.8228 10.9458C12.0639 11.1869 12.0639 11.5778 11.8228 11.8189C11.7018 11.9392 11.5439 12 11.3867 12Z"
                    fill="#4C546C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_close">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span class="text-base font-semibold text-[#4C546C]">Close</span>
            </button>
            <button
              type="submit"
              class="flex items-center justify-center gap-3 h-9 px-[18px] bg-[#009FD8] rounded hover:bg-[#0385b5] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7432 3.76582C14.0231 4.01076 14.0485 4.43749 13.7995 4.71384L6.79025 12.4937C6.53996 12.7715 6.11021 12.7892 5.83796 12.5329L1.78194 8.7145C1.529 8.47637 1.50478 8.07957 1.7218 7.8083C1.96127 7.50897 2.40721 7.46777 2.6922 7.7241L5.83913 10.5547C6.11261 10.8007 6.53366 10.7787 6.78005 10.5056L12.8091 3.82096C13.053 3.55046 13.4691 3.52594 13.7432 3.76582Z"
                  fill="white"
                />
              </svg>
              <span class="text-base font-semibold text-white">Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AddTestimonialsModalComponent {
  @Input() isOpen = false;
  @Input() editMode = false;
  @Input() set testimonialData(data: any) {
    if (data) {
      this.formData = {
        name: data.name || "",
        designation: data.designation || "",
        testimonial: data.testimonial || "",
        rating: data.rating || "5",
      };
    }
  }

  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  formData = {
    name: "",
    designation: "",
    testimonial: "",
    rating: "5",
  };

  onSubmit(): void {
    this.submit.emit({ ...this.formData });
    this.resetForm();
    this.close.emit();
  }

  onCancel(): void {
    this.resetForm();
    this.close.emit();
  }

  private resetForm(): void {
    this.formData = {
      name: "",
      designation: "",
      testimonial: "",
      rating: "5",
    };
  }
}
