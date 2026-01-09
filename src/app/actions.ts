"use server";

import { sendLeadNotification, sendPartnerNotification } from "@/lib/email";
import { revalidatePath } from "next/cache";

export async function submitLead(formData: FormData) {
    const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        businessName: formData.get("businessName") as string,
        service: formData.get("service") as string,
        message: formData.get("message") as string,
    };

    try {
        // Send email notification to contact@feelifysolution.com
        const emailResult = await sendLeadNotification(data);

        if (!emailResult.success) {
            throw new Error('Failed to send email notification');
        }

        revalidatePath("/");
        return { success: true, message: "Thank you! We'll contact you soon." };
    } catch (error) {
        console.error("Error processing lead:", error);
        return { success: false, message: "Something went wrong. Please try WhatsApp." };
    }
}

export async function submitPartnerInquiry(formData: FormData) {
    const data = {
        name: formData.get("name") as string,
        company: formData.get("company") as string,
        partnershipType: formData.get("partnershipType") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
    };

    try {
        // Send email notification to contact@feelifysolution.com
        const emailResult = await sendPartnerNotification(data);

        if (!emailResult.success) {
            throw new Error('Failed to send email notification');
        }

        revalidatePath("/brands");
        return { success: true, message: "Partnership inquiry received! Let's build together." };
    } catch (error) {
        console.error("Error processing partner inquiry:", error);
        return { success: false, message: "Something went wrong. Please try WhatsApp." };
    }
}
