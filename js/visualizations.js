// Visualization utilities using D3.js and Plotly

// Base visualization class
class Visualization {
    constructor(containerId, width = 800, height = 600) {
        this.containerId = containerId;
        this.width = width;
        this.height = height;
        this.svg = null;
    }

    createSVG() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container ${this.containerId} not found`);
            return null;
        }

        // Clear existing content
        container.innerHTML = '';

        // Create SVG
        this.svg = d3.select(`#${this.containerId}`)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('viewBox', `0 0 ${this.width} ${this.height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');

        return this.svg;
    }

    clear() {
        if (this.svg) {
            this.svg.selectAll('*').remove();
        }
    }
}

// Graph visualization using D3.js
class GraphVisualization extends Visualization {
    constructor(containerId, width = 800, height = 600) {
        super(containerId, width, height);
        this.nodes = [];
        this.edges = [];
        this.simulation = null;
    }

    setGraph(nodes, edges) {
        this.nodes = nodes.map((node, i) => ({
            id: node.id || i,
            label: node.label || `Node ${i}`,
            ...node
        }));

        this.edges = edges.map(edge => ({
            source: edge.source,
            target: edge.target,
            weight: edge.weight || 1,
            ...edge
        }));

        return this;
    }

    render() {
        this.createSVG();

        // Create force simulation
        this.simulation = d3.forceSimulation(this.nodes)
            .force('link', d3.forceLink(this.edges).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(this.width / 2, this.height / 2));

        // Draw edges
        const link = this.svg.append('g')
            .selectAll('line')
            .data(this.edges)
            .enter()
            .append('line')
            .attr('stroke', '#999')
            .attr('stroke-width', d => Math.sqrt(d.weight) * 2);

        // Draw edge labels (for weighted graphs)
        const edgeLabels = this.svg.append('g')
            .selectAll('text')
            .data(this.edges.filter(e => e.weight && e.weight !== 1))
            .enter()
            .append('text')
            .attr('font-size', '10px')
            .attr('fill', '#666')
            .text(d => d.weight);

        // Draw nodes
        const node = this.svg.append('g')
            .selectAll('circle')
            .data(this.nodes)
            .enter()
            .append('circle')
            .attr('r', d => d.size || 20)
            .attr('fill', d => d.color || '#2563eb')
            .call(this.drag(this.simulation));

        // Draw node labels
        const labels = this.svg.append('g')
            .selectAll('text')
            .data(this.nodes)
            .enter()
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em')
            .attr('font-size', '12px')
            .attr('fill', 'white')
            .attr('font-weight', 'bold')
            .text(d => d.label);

        // Update positions on simulation tick
        this.simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);

            labels
                .attr('x', d => d.x)
                .attr('y', d => d.y);

            edgeLabels
                .attr('x', d => (d.source.x + d.target.x) / 2)
                .attr('y', d => (d.source.y + d.target.y) / 2);
        });

        return this;
    }

    drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended);
    }
}

// Tree visualization
class TreeVisualization extends Visualization {
    constructor(containerId, width = 800, height = 600) {
        super(containerId, width, height);
        this.root = null;
    }

    setTree(data) {
        this.root = d3.hierarchy(data);
        return this;
    }

    render() {
        this.createSVG();

        const treeLayout = d3.tree().size([this.width - 100, this.height - 100]);
        treeLayout(this.root);

        // Draw links
        this.svg.append('g')
            .selectAll('path')
            .data(this.root.links())
            .enter()
            .append('path')
            .attr('fill', 'none')
            .attr('stroke', '#999')
            .attr('stroke-width', 2)
            .attr('d', d3.linkVertical()
                .x(d => d.x + 50)
                .y(d => d.y + 50));

        // Draw nodes
        const nodes = this.svg.append('g')
            .selectAll('circle')
            .data(this.root.descendants())
            .enter()
            .append('circle')
            .attr('cx', d => d.x + 50)
            .attr('cy', d => d.y + 50)
            .attr('r', 20)
            .attr('fill', '#2563eb');

        // Draw labels
        this.svg.append('g')
            .selectAll('text')
            .data(this.root.descendants())
            .enter()
            .append('text')
            .attr('x', d => d.x + 50)
            .attr('y', d => d.y + 50)
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em')
            .attr('fill', 'white')
            .attr('font-weight', 'bold')
            .text(d => d.data.name);

        return this;
    }
}

// Set visualization using Venn diagrams
class SetVisualization extends Visualization {
    constructor(containerId, width = 600, height = 400) {
        super(containerId, width, height);
        this.sets = [];
    }

    setSets(sets) {
        this.sets = sets;
        return this;
    }

    render() {
        this.createSVG();

        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const radius = 100;

        if (this.sets.length === 1) {
            // Single set
            this.svg.append('circle')
                .attr('cx', centerX)
                .attr('cy', centerY)
                .attr('r', radius)
                .attr('fill', this.sets[0].color || '#2563eb')
                .attr('opacity', 0.5)
                .attr('stroke', '#000')
                .attr('stroke-width', 2);

            this.svg.append('text')
                .attr('x', centerX)
                .attr('y', centerY - radius - 10)
                .attr('text-anchor', 'middle')
                .attr('font-weight', 'bold')
                .text(this.sets[0].label);

        } else if (this.sets.length === 2) {
            // Two sets (Venn diagram)
            const offset = 60;

            this.svg.append('circle')
                .attr('cx', centerX - offset)
                .attr('cy', centerY)
                .attr('r', radius)
                .attr('fill', this.sets[0].color || '#2563eb')
                .attr('opacity', 0.5)
                .attr('stroke', '#000')
                .attr('stroke-width', 2);

            this.svg.append('circle')
                .attr('cx', centerX + offset)
                .attr('cy', centerY)
                .attr('r', radius)
                .attr('fill', this.sets[1].color || '#7c3aed')
                .attr('opacity', 0.5)
                .attr('stroke', '#000')
                .attr('stroke-width', 2);

            this.svg.append('text')
                .attr('x', centerX - offset - radius / 2)
                .attr('y', centerY)
                .attr('text-anchor', 'middle')
                .attr('font-weight', 'bold')
                .text(this.sets[0].label);

            this.svg.append('text')
                .attr('x', centerX + offset + radius / 2)
                .attr('y', centerY)
                .attr('text-anchor', 'middle')
                .attr('font-weight', 'bold')
                .text(this.sets[1].label);
        }

        return this;
    }
}

// Probability distribution visualization using Plotly
function plotDistribution(containerId, data, title = 'Probability Distribution') {
    const trace = {
        x: data.x,
        y: data.y,
        type: 'bar',
        marker: {
            color: '#2563eb'
        }
    };

    const layout = {
        title: title,
        xaxis: { title: data.xLabel || 'Value' },
        yaxis: { title: data.yLabel || 'Probability' },
        plot_bgcolor: '#f9fafb',
        paper_bgcolor: '#ffffff'
    };

    Plotly.newPlot(containerId, [trace], layout, {responsive: true});
}

// Function visualization
function plotFunction(containerId, func, xRange, title = 'Function Plot') {
    const x = [];
    const y = [];

    for (let i = xRange[0]; i <= xRange[1]; i += 0.1) {
        x.push(i);
        y.push(func(i));
    }

    const trace = {
        x: x,
        y: y,
        type: 'scatter',
        mode: 'lines',
        line: {
            color: '#2563eb',
            width: 3
        }
    };

    const layout = {
        title: title,
        xaxis: { title: 'x' },
        yaxis: { title: 'f(x)' },
        plot_bgcolor: '#f9fafb',
        paper_bgcolor: '#ffffff'
    };

    Plotly.newPlot(containerId, [trace], layout, {responsive: true});
}

// Heatmap visualization
function plotHeatmap(containerId, data, title = 'Heatmap') {
    const trace = {
        z: data.z,
        x: data.x,
        y: data.y,
        type: 'heatmap',
        colorscale: 'Viridis'
    };

    const layout = {
        title: title,
        plot_bgcolor: '#f9fafb',
        paper_bgcolor: '#ffffff'
    };

    Plotly.newPlot(containerId, [trace], layout, {responsive: true});
}

// Scatter plot for correlation
function plotScatter(containerId, x, y, title = 'Scatter Plot') {
    const trace = {
        x: x,
        y: y,
        mode: 'markers',
        type: 'scatter',
        marker: {
            color: '#2563eb',
            size: 8
        }
    };

    const layout = {
        title: title,
        xaxis: { title: 'X' },
        yaxis: { title: 'Y' },
        plot_bgcolor: '#f9fafb',
        paper_bgcolor: '#ffffff'
    };

    Plotly.newPlot(containerId, [trace], layout, {responsive: true});
}

// Truth table visualization
function createTruthTable(containerId, variables, expression) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const numVars = variables.length;
    const numRows = Math.pow(2, numVars);

    let html = '<table class="truth-table"><thead><tr>';

    // Header
    variables.forEach(v => {
        html += `<th>${v}</th>`;
    });
    html += `<th>${expression}</th></tr></thead><tbody>`;

    // Generate rows
    for (let i = 0; i < numRows; i++) {
        html += '<tr>';
        const values = [];

        for (let j = numVars - 1; j >= 0; j--) {
            const value = (i >> j) & 1;
            values.push(value);
            html += `<td>${value}</td>`;
        }

        // Evaluate expression (simplified for demo)
        const result = evaluateBooleanExpression(expression, variables, values);
        html += `<td><strong>${result ? 1 : 0}</strong></td>`;
        html += '</tr>';
    }

    html += '</tbody></table>';
    container.innerHTML = html;
}

// Simplified boolean expression evaluator (for demo purposes)
function evaluateBooleanExpression(expr, vars, values) {
    // This is a simplified version. In production, use a proper parser
    let result = expr;
    vars.forEach((v, i) => {
        result = result.replace(new RegExp(v, 'g'), values[i]);
    });
    try {
        return eval(result.replace(/∧/g, '&&').replace(/∨/g, '||').replace(/¬/g, '!'));
    } catch (e) {
        return false;
    }
}

// Add CSS for truth table
const style = document.createElement('style');
style.textContent = `
    .truth-table {
        border-collapse: collapse;
        width: 100%;
        margin: 1rem 0;
        background: white;
    }
    .truth-table th,
    .truth-table td {
        border: 1px solid #e5e7eb;
        padding: 0.75rem;
        text-align: center;
    }
    .truth-table th {
        background-color: #2563eb;
        color: white;
        font-weight: 600;
    }
    .truth-table tbody tr:nth-child(even) {
        background-color: #f9fafb;
    }
    .truth-table tbody tr:hover {
        background-color: #e0e7ff;
    }
`;
document.head.appendChild(style);
