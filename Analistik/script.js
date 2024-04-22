document.addEventListener('DOMContentLoaded', function () {
    // Sample data
    const visitorsData = [150, 200, 300, 250, 400, 350];
    const revenueData = [2000, 2500, 3000, 2800, 3500, 3200];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
    // Create visitors chart
    const visitorsChart = new Chart(document.getElementById('visitors-chart'), {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: 'Pengguna Premium',
          data: visitorsData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  
    // Create revenue chart
    const revenueChart = new Chart(document.getElementById('revenue-chart'), {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{
          label: 'Pengguna',
          data: revenueData,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  });
  