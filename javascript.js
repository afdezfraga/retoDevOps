  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});
  google.charts.load('current', { 'packages': ['table'] });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Top');
    data.addColumn('string', 'Author');
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Commits');
    data.addRows([
	[1, 'docker', 'awesome-compose', 163],
     	[2, 'Ryujinx', 'Ryujinx', 1598],
     	[3, 'sveltejs', 'kit', 803],
     	[4, 'sickcodes', 'Docker-OSX', 261],
     	[5, 'benawad', 'dogehouse', 3622],
     	[6, 'Chia-Network', 'chia-blockchain', 4418],
     	[7, 'GUI', 'covid-vaccine-spotter', 269],
     	[8, 'srcrs', 'UnicomTask', 109],
     	[9, 'merry75', 'educative.io_courses', 118],
     	[10, 'stefan-jansen', 'machine-learning-for-trading', 262],
     	[11, 'spring-projects-experimental', 'spring-native', 1994],
     	[12, 'ChristianChiarulli', 'nvcode', 668],
     	[13, 'discordjs', 'discord.js', 4973],
     	[14, 'nasa', 'openmct', 6767],
     	[15, 'openjdk', 'jdk', 63883],
     	[16, 'geekcomputers', 'Python', 2246],
     	[17, 'chatwoot', 'chatwoot', 1090],
     	[18, 'CyC2018', 'CS-Notes', 3766],
     	[19, 'mobilecoinfoundation', 'mobilecoin', 617],
     	[20, 'jesse-ai', 'jesse', 822],
     	[21, 'XTLS', 'Xray-core', 165],
     	[22, 'bettercap', 'bettercap', 1962],
     	[23, 'uutils', 'coreutils', 4145],
     	[24, 'OpenZeppelin', 'openzeppelin-contracts', 2390],
     	[25, 'edeng23', 'binance-trade-bot', 218],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 163],
     	['#2 Ryujinx', 1598],
     	['#3 kit', 803],
     	['#4 Docker-OSX', 261],
     	['#5 dogehouse', 3622],
     	['#6 chia-blockchain', 4418],
     	['#7 covid-vaccine-spotter', 269],
     	['#8 UnicomTask', 109],
     	['#9 educative.io_courses', 118],
     	['#10 machine-learning-for-trading', 262],
     	['#11 spring-native', 1994],
     	['#12 nvcode', 668],
     	['#13 discord.js', 4973],
     	['#14 openmct', 6767],
     	['#15 jdk', 63883],
     	['#16 Python', 2246],
     	['#17 chatwoot', 1090],
     	['#18 CS-Notes', 3766],
     	['#19 mobilecoin', 617],
     	['#20 jesse', 822],
     	['#21 Xray-core', 165],
     	['#22 bettercap', 1962],
     	['#23 coreutils', 4145],
     	['#24 openzeppelin-contracts', 2390],
     	['#25 binance-trade-bot', 218],
     	
    ]);

    // Set chart options
    var options = {};

    var options2 = {
        title: 'Top trending GitHub repos',
        hAxis: {
          title: 'Number of commits'
        },
        'width':'1090','height':'1100'
      };

    // Instantiate and draw our chart, passing in some options.
    var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart2.draw(data2, options2);

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Table(document.getElementById('chart_div'));
    chart.draw(data, options);
  }