async function loadBookings() {
    try {
        const res = await fetch("http://127.0.0.1:5000/all");
        const data = await res.json();

        const table = document.getElementById("data");
        table.innerHTML = "";

        data.forEach(item => {
            table.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${item.service}</td>
                    <td>${item.date}</td>

                    <!-- STATUS BADGE + DROPDOWN -->
                    <td>
                        <span class="status ${item.status}">
                            ${item.status || "Pending"}
                        </span>

                        <select onchange="updateStatus(this.value, '${item._id}')">
                            <option ${item.status === "Pending" ? "selected" : ""}>Pending</option>
                            <option ${item.status === "Confirmed" ? "selected" : ""}>Confirmed</option>
                            <option ${item.status === "Completed" ? "selected" : ""}>Completed</option>
                            <option ${item.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
                        </select>
                    </td>

                    <!-- ACTION -->
                    <td>
                        <button onclick="deleteBooking('${item._id}')">
                            Delete ❌
                        </button>
                    </td>
                </tr>
            `;
        });

    } catch (error) {
        console.log("Error loading bookings:", error);
    }
}


// DELETE BOOKING
async function deleteBooking(id) {
    try {
        const res = await fetch(`http://127.0.0.1:5000/delete/${id}`, {
            method: "DELETE"
        });

        const msg = await res.text();
        alert(msg);

        loadBookings();

    } catch (error) {
        console.log("Delete error:", error);
    }
}


// UPDATE STATUS
async function updateStatus(status, id) {
    try {
        await fetch(`http://127.0.0.1:5000/update-status/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status })
        });

        alert("Status Updated ✅");

        loadBookings();

    } catch (error) {
        console.log("Status update error:", error);
    }
}


// INITIAL LOAD
loadBookings();