document.addEventListener("DOMContentLoaded", () => {
    // ========== ACCOUNTING FUNCTIONALITY ==========
    const form = document.getElementById('accounting-form');
    const table = document.getElementById('accounting-table')?.querySelector('tbody');
    const totalField = document.getElementById('total');
    let total = 0;

    if (form && table && totalField) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const desc = document.getElementById('desc').value;
            const amt = parseFloat(document.getElementById('amount').value);
            if (desc && !isNaN(amt)) {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${desc}</td><td>$${amt.toFixed(2)}</td>`;
                table.appendChild(row);
                total += amt;
                totalField.textContent = total.toFixed(2);
                form.reset();
            }
        });
    }


        // Optional: Clear button
        const clearBtn = document.getElementById("clear-submissions");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                if (confirm("Are you sure you want to delete all messages?")) {
                    localStorage.removeItem("contactMessages");
                    location.reload();
                }
            });
        }
    }
});
