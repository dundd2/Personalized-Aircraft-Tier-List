# Personalized Aircraft Tier List

This project provides an interactive, customizable tier list for ranking aircraft models from Airbus, Boeing, and regional manufacturers. It allows users to sort aircraft into tiers based on personal preferences or other criteria. The list is fully adjustable and includes a save feature, so changes persist even after reloading the page.

## Features

- **Interactive Tier List**: Move aircraft models between tiers to create a personalized ranking.
- **Tier Descriptions**: Each tier has a description to give context to the rankings, such as "Top-tier flying experience" or "Avoid at all costs."
- **Save and Reset Options**: Save your customized tier list, and reset to the default layout if desired.
- **Auto-Save**: The component saves changes automatically using `localStorage` so that preferences are retained across sessions.

## Tier Names and Descriptions

The tiers are organized from best to worst, with descriptions to clarify each category's sentiment:

- **A**: The best jets available. Top-tier flying experience.
- **B**: Excellent planes that I love to fly on, though not quite the absolute best.
- **C**: Good, reliable aircraft. Slightly older models, but still comfortable and enjoyable.
- **D**: Standard planes. Nothing exceptional, but I feel safe and comfortable on board.
- **E**: Poor experience. I strongly dislike flying on these aircraft.
- **F**: Avoid at all costs. I feel unsafe and would never fly on these again.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aircraft-tier-list.git
   cd aircraft-tier-list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app locally:
   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` to view the app in your browser.

## Usage

- **To Move Aircraft Between Tiers**: Click on an aircraft to select it, then click on a tier to move it there.
- **To Save Changes**: Click the "Save" button to save your current setup. Changes are also saved automatically when you move an aircraft.
- **To Reset the List**: Click the "Reset" button to revert to the initial list. Confirm the action to reset all changes.

## Technology Stack

- **React** for UI components
- **localStorage** for saving and retrieving custom tier arrangements
