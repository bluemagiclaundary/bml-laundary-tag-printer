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

    // Short forms for 38mm roll
    const services = [
        { id: 'dcQty', label: 'DC', starch: true },
        { id: 'wiQty', label: 'W&I' },
        { id: 'wfQty', label: 'W&F' },
        { id: 'siQty', label: 'S.IRON' },
        { id: 'polishQty', label: 'POL' } // Shortened to POL
    ];

    services.forEach(service => {
        const qty = parseInt(document.getElementById(service.id).value) || 0;
        const starchVal = service.starch ? document.getElementById('dcStarchType').value : "";

        for (let i = 1; i <= qty; i++) {
            const tag = document.createElement('div');
            tag.className = 'tag';
            
            tag.innerHTML = `
                <div class="bml-head">BML</div>
                <div class="order-line">#${orderNo}</div>
                <div class="cust-name">${customer.toUpperCase()}</div>
                <div class="service-line">${service.label}${starchVal ? ' ST-' + starchVal : ''}</div>
                <div class="count-line">PCS: ${i} / ${qty}</div>
                <div class="date-line">DEL: ${delivery || ''}</div>
            `;
            tagsContainer.appendChild(tag);
        }
    });
}

function printTags() { window.print(); }
function refreshPage() { location.reload(); }
