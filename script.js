// Smooth Scroll for "Book a Table" button
function scrollToBooking() {
    const bookingSection = document.getElementById("booking");
    bookingSection.scrollIntoView({ behavior: 'smooth' });
}

// Handle Booking Form Submission
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Check if all fields are filled
    if (name && email && date && time) {
        const confirmationMessage = `
            <h3>Booking Confirmed!</h3>
            <p>Thank you, ${name}! Your table has been booked for ${date} at ${time}.</p>
            <p>We'll send a confirmation to your email: ${email}.</p>
        `;

        // Display confirmation message
        document.getElementById("confirmation").innerHTML = confirmationMessage;

        // Clear the form fields
        document.getElementById("booking-form").reset();
    } else {
        // Display error if any field is missing
        document.getElementById("confirmation").innerHTML = `
            <p style="color: red;">Please fill out all fields to confirm your booking.</p>
        `;
    }
});