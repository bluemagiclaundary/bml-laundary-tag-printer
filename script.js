function generateTags() {
    const orderNo = document.getElementById('orderNo').value;
    const customer = document.getElementById('customer').value;
    const delivery = document.getElementById('delivery').value;
    const tagsContainer = document.getElementById('tags');
    
    tagsContainer.innerHTML = '';

    if (!orderNo || !customer) {
        alert("Please enter Order No and Customer Name");
        return;
    }

    // Helper Function to Create Tags
    function createTagLoop(qty, label) {
        for (let i = 1; i <= qty; i++) {
            const tagDiv = document.createElement('div');
            tagDiv.className = 'tag';
            tagDiv.innerHTML = `
                <div class="bml-head">BML</div>
                <div class="order-line">#${orderNo}</div>
                <div class="cust-name">${customer}</div>
                <div class="service-line">${label}</div>
                <div class="count-line">PCS: ${i} / ${qty}</div>
                <div class="date-line">DEL: ${delivery || '---'}</div>
            `;
            tagsContainer.appendChild(tagDiv);
        }
    }

    // 1. Normal Dry Clean
    const dcNormal = parseInt(document.getElementById('dcQty').value) || 0;
    if (dcNormal > 0) createTagLoop(dcNormal, 'DC');

    // 2. Starch Dry Clean
    const dcStarchQty = parseInt(document.getElementById('dcStarchQty').value) || 0;
    const starchType = document.getElementById('dcStarchType').value;
    if (dcStarchQty > 0) {
        const starchLabel = starchType ? `DC ST-${starchType}` : 'DC STARCH';
        createTagLoop(dcStarchQty, starchLabel);
    }

    // 3. Other Services (Short Forms)
    const wi = parseInt(document.getElementById('wiQty').value) || 0;
    if (wi > 0) createTagLoop(wi, 'W&I');

    const wf = parseInt(document.getElementById('wfQty').value) || 0;
    if (wf > 0) createTagLoop(wf, 'W&F');

    const si = parseInt(document.getElementById('siQty').value) || 0;
    if (si > 0) createTagLoop(si, 'S.IRON');

    const pol = parseInt(document.getElementById('polishQty').value) || 0;
    if (pol > 0) createTagLoop(pol, 'POL');
}

function printTags() {
    if (document.querySelectorAll('.tag').length === 0) {
        alert("Generate tags first!");
        return;
    }
    window.print();
}

function refreshPage() {
    if(confirm("Clear all data?")) window.location.reload();
}
