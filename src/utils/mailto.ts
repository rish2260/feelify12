export function sendMail({
    subject,
    body,
}: {
    subject: string;
    body: string;
}) {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    window.location.href = `mailto:contact@feelifysolution.com?subject=${encodedSubject}&body=${encodedBody}`;
}
