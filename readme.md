# Hybrid Poker Switching System

## 1. Project Overview

This project aims to develop a **Hybrid Poker Switching System** proposed by GG PRODUCTION. This system is designed to prevent operator errors that may occur during live poker broadcasting and to dramatically improve the stability and efficiency of the broadcast.

## 2. Core Concept: Hybrid Model

The core of the system is a hybrid model that separates and automates the two tasks of **'player identification'** and **'action execution'**.

*   **Position Identification (Automatic):**
    *   Uses a button array that corresponds 1:1 to each seat at the poker table.
    *   A green light automatically illuminates on the button of the player whose turn it is to act, providing a clear visual signal to the operator.

*   **Action Execution (Manual):**
    *   The operator executes the corresponding player's action by pressing a central control button (e.g., CALL/CHK, RAISE, FOLD).
    *   When an action is executed, the system automatically calculates the next player's turn and switches the camera to that position.

## 3. Key Features

*   **Interactive Simulator:**
    *   Provides a web-based simulator to test and verify the logic of the actual system in advance.
    *   Users can simulate all processes, including table setup, starting a hand, and executing player actions.

*   **'Last Aggressor' Algorithm:**
    *   The system intelligently tracks the last player to make an aggressive bet (raise) in a betting round.
    *   This allows for accurate determination of the end of a betting round and smooth progression to the next street (e.g., flop, turn, river).

*   **Automatic Position Calculation:**
    *   Automatically calculates and sets the positions of the dealer (BTN), small blind (SB), big blind (BB), and the first to act (UTG) at the start of each new hand.

*   **Error Correction and Manual Control:**
    *   **UNDO Function:** Allows for immediate reversal to the previous state in case of an operator error or a player's action being reversed.
    *   **SET TABLE Mode:** Provides a modification mode for manually changing a player's status (e.g., fold, all-in) during the game.

*   **Real-time Monitoring:**
    *   Allows for real-time monitoring of the system's main variables (e.g., current pot size, player stacks) and all event logs through a separate side panel.

## 4. Expected Benefits

*   **Broadcast Accident Prevention:** Prevents broadcast accidents caused by human error by automating camera switching, player turn indication, etc.
*   **Increased Operational Efficiency:** Allows operators to focus on other important broadcast elements such as graphics and subtitles, rather than complex manual operations.
*   **Improved Broadcast Quality:** Provides viewers with more immersive poker content through fast and accurate game progression.
