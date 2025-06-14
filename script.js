function toggleDept(id) {
  const element = document.getElementById(id);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    element.previousElementSibling.querySelector(
      "span:last-child"
    ).textContent = "-";
  } else {
    element.classList.add("hidden");
    element.previousElementSibling.querySelector(
      "span:last-child"
    ).textContent = "+";
  }
}

function showDonors(bloodType) {
  const donorInfo = document.getElementById("donor-info");
  const bloodTypeSpan = document.getElementById("blood-type");
  const donorList = document.getElementById("donor-list");

  // Sample donor data - in a real app, this would come from a database
  const donors = {
    "A+": [
      {
        name: "John Smith",
        phone: "555-123-4567",
        lastDonation: "2023-03-15",
      },
      {
        name: "Emily Johnson",
        phone: "555-234-5678",
        lastDonation: "2023-05-22",
      },
    ],
    "B+": [
      {
        name: "Michael Brown",
        phone: "555-345-6789",
        lastDonation: "2023-04-10",
      },
    ],
    "O+": [
      {
        name: "Sarah Davis",
        phone: "555-456-7890",
        lastDonation: "2023-02-28",
      },
      {
        name: "David Wilson",
        phone: "555-567-8901",
        lastDonation: "2023-06-05",
      },
      {
        name: "Lisa Martinez",
        phone: "555-678-9012",
        lastDonation: "2023-01-17",
      },
    ],
    "AB+": [
      {
        name: "Robert Taylor",
        phone: "555-789-0123",
        lastDonation: "2023-05-30",
      },
    ],
  };

  // Show donor info section
  donorInfo.classList.remove("hidden");
  bloodTypeSpan.textContent = bloodType;

  // Clear previous donor list
  donorList.innerHTML = "";

  // Add donors to the list
  if (donors[bloodType] && donors[bloodType].length > 0) {
    donors[bloodType].forEach((donor) => {
      const donorElement = document.createElement("div");
      donorElement.className = "border-b border-gray-200 pb-2";
      donorElement.innerHTML = `
                        <p class="font-medium">${donor.name}</p>
                        <p>Phone: ${donor.phone}</p>
                        <p>Last Donation: ${donor.lastDonation}</p>
                    `;
      donorList.appendChild(donorElement);
    });
  } else {
    const nodonorElement = document.createElement("p");
    nodonorElement.textContent = "No donors available for this blood type.";
    donorList.appendChild(nodonorElement);
  }
}

// Team Modal Functions
function openTeamModal() {
  document.getElementById("teamModal").style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

function closeTeamModal() {
  document.getElementById("teamModal").style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("teamModal");
  if (event.target == modal) {
    closeTeamModal();
  }
};
